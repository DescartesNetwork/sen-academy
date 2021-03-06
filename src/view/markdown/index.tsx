import { useCallback, useEffect, useMemo, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Row, Col, Card } from 'antd'
import MarkdownHeader from './markdownHeader'
import Preview from './markdownPreview'
import Editor from './editor'

import Autosave from './autosave'
import { LanguageType } from 'constant'
import { getCredential } from 'helper/credential'
import { upsetPost } from 'helper/warehouse'
import { ArticleData, SingleArticleData } from 'store/warehouse.reducer'

const HEIGHT = 332
let savingId: NodeJS.Timeout
const DEFAULT_SINGLE_ARTICLE = (
  partialData: Partial<SingleArticleData> = {},
): SingleArticleData => ({
  title: '',
  contents: '',
  ...partialData,
})
const DEFAULT_ARTICLE = (
  partialData: Partial<ArticleData> = {},
): ArticleData => ({
  createdAt: Number(new Date()),
  updatedAt: Number(new Date()),
  thumbnail: '',
  category: [],
  en: DEFAULT_SINGLE_ARTICLE(),
  vn: DEFAULT_SINGLE_ARTICLE(),
  ...partialData,
})

const Markdown = () => {
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(false)
  const [force, setForce] = useState(false)
  const [language, setLanguage] = useState<LanguageType>('en')
  const { postId } = useParams<{ postId: string }>()
  const autosave = useMemo(() => new Autosave(postId), [postId])
  const history = useHistory()

  const initialData = useMemo(() => DEFAULT_ARTICLE(autosave.get()), [autosave])
  const [title, setTitle] = useState(initialData[language].title)
  const [defaultContents, setDefaultContents] = useState(
    initialData[language].contents,
  )
  const [contents, setContents] = useState(initialData[language].contents)
  const [category, setCategory] = useState<string[]>(initialData.category)
  const [thumbnail, setThumbnail] = useState(initialData.thumbnail)

  const data = useMemo(() => {
    return DEFAULT_ARTICLE({
      ...autosave.get(),
      updatedAt: Number(new Date()),
      thumbnail,
      category,
      [language]: { contents, title },
    })
  }, [autosave, language, contents, title, thumbnail, category])

  const onLanguage = useCallback(
    async (language: LanguageType) => {
      const {
        [language]: { title, contents },
      } = DEFAULT_ARTICLE(autosave.get())
      await setDefaultContents(contents)
      await setContents(contents)
      await setTitle(title)
      await setLanguage(language)
    },
    [autosave],
  )

  const onDelete = useCallback(() => {
    autosave.clear()
    return history.push('/publisher')
  }, [autosave, history])

  const onPublish = useCallback(async () => {
    setLoading(true)
    try {
      await upsetPost(postId, data, getCredential(), force)
      autosave.clear()
      setForce(false) // Clear force
      window.notify({
        type: 'success',
        description: 'The article has been posted.',
      })
      return history.push('/publisher')
    } catch (er: any) {
      setForce(true) // Force re-clone
      return window.notify({
        type: 'error',
        description: `${er.message} Click again to force it.`,
      })
    } finally {
      return setLoading(false)
    }
  }, [autosave, data, history, postId, force])

  useEffect(() => {
    if (savingId) clearTimeout(savingId)
    setSaving(true)
    savingId = setTimeout(() => {
      autosave.set(data)
      return setSaving(false)
    }, 1000)
    return () => clearTimeout(savingId)
  }, [autosave, data])

  return (
    <Card bordered={false} bodyStyle={{ padding: 16, height: '100%' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <MarkdownHeader
            onPublish={onPublish}
            onDelete={onDelete}
            language={language}
            onLanguage={onLanguage}
            title={title}
            onTitle={setTitle}
            category={category}
            onCategory={setCategory}
            thumbnail={thumbnail}
            onThumbnail={setThumbnail}
            loading={loading}
            saving={saving}
          />
        </Col>
        <Col xs={24} md={12}>
          <Editor
            defaultValue={defaultContents}
            value={contents}
            onChange={setContents}
            height={`calc(100vh - ${HEIGHT}px)`}
          />
        </Col>
        <Col xs={24} md={12}>
          <Preview
            value={contents}
            style={{
              height: `calc(100vh - ${HEIGHT - 56}px)`,
              overflow: 'auto',
            }}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default Markdown
