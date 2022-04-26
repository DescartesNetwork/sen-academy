import { useCallback, useEffect, useMemo, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Button, Card, Col, Divider, Row, Typography } from 'antd'
import IonIcon from 'components/ionicon'
import Language from 'components/language'
import Editor from './editor'
import Preview from './markdownPreview'

import Autosave, { ArticleData, SingleArticleData } from './autosave'
import { LanguageType } from 'constant'
import { getCredential } from 'components/githubLogin/utils'
import { newPost } from 'view/publisher/utils'

let savingId: NodeJS.Timeout
const DEFAULT_SINGLE_ARTICLE: SingleArticleData = {
  title: '',
  contents: '',
}
const DEFAULT_ARTICLE: ArticleData = {
  createdAt: Number(new Date()),
  updatedAt: Number(new Date()),
  thumbnail: '',
  category: [],
  en: { ...DEFAULT_SINGLE_ARTICLE },
  vn: { ...DEFAULT_SINGLE_ARTICLE },
}

const Markdown = () => {
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(false)
  const { postId } = useParams<{ postId: string }>()
  const autosave = useMemo(() => new Autosave(postId), [postId])
  const [language, setLanguage] = useState<LanguageType>('en')
  const [contents, setContents] = useState(
    autosave.get()?.[language].contents || '',
  )
  const history = useHistory()

  const initializedContents = useMemo(() => {
    return autosave.get()?.[language].contents || ''
  }, [autosave, language])
  const data: ArticleData = useMemo(() => {
    const article: SingleArticleData = { title: '', contents }
    return { ...DEFAULT_ARTICLE, ...autosave.get(), [language]: article }
  }, [autosave, language, contents])

  useEffect(() => {
    if (savingId) clearTimeout(savingId)
    setSaving(true)
    savingId = setTimeout(() => {
      autosave.set(data)
      return setSaving(false)
    }, 1000)
    return () => clearTimeout(savingId)
  }, [autosave, data])

  useEffect(() => {
    setContents(initializedContents)
  }, [initializedContents])

  const onClear = useCallback(() => {
    autosave.clear()
    return history.push('/publisher')
  }, [autosave, history])

  const onPublish = useCallback(async () => {
    setLoading(true)
    try {
      await newPost(postId, data, getCredential())
      await window.notify({
        type: 'success',
        description: 'The article has been posted.',
      })
    } catch (er: any) {
      return window.notify({ type: 'error', description: er.message })
    } finally {
      return setLoading(false)
    }
  }, [postId, data])

  return (
    <Card bordered={false} bodyStyle={{ padding: 12, height: '100%' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Editor
            initialValue={initializedContents}
            value={contents}
            onChange={setContents}
          />
        </Col>
        <Col xs={24} md={12}>
          <Preview
            header={
              <Row gutter={[8, 8]} align="middle">
                <Col flex="auto">
                  <Row gutter={[8, 8]} align="middle" wrap={false}>
                    <Col>
                      <Language value={language} onChange={setLanguage} />
                    </Col>
                    <Col>
                      <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                        {saving ? 'Saving...' : 'Saved'}
                      </Typography.Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Button
                    type="text"
                    icon={<IonIcon name="trash" />}
                    onClick={onClear}
                  >
                    Delete
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    icon={<IonIcon name="arrow-redo" />}
                    onClick={onPublish}
                    loading={loading}
                  >
                    Publish
                  </Button>
                </Col>
                <Col span={24}>
                  <Divider style={{ margin: 0 }} />
                </Col>
              </Row>
            }
            value={contents}
            style={{ height: 'calc(100vh - 268px)', overflow: 'auto' }}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default Markdown
