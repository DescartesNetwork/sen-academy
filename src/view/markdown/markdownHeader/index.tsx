import { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Button, Col, Input, Modal, Row, Space, Typography } from 'antd'
import IonIcon from 'components/ionicon'
import Language from 'components/language'
import Category from '../../../components/category'

import { LanguageType } from 'constant'
import { AppState } from 'store'

export type MarkdownHeaderProps = {
  onPublish?: () => void
  onDelete?: () => void
  language?: LanguageType
  onLanguage?: (value: LanguageType) => void
  title?: string
  onTitle?: (value: string) => void
  category?: string[]
  onCategory?: (value: string[]) => void
  thumbnail?: string
  onThumbnail?: (value: string) => void
  loading?: boolean
  saving?: boolean
}

const MarkdownHeader = ({
  onPublish = () => {},
  onDelete = () => {},
  language = 'en',
  onLanguage = () => {},
  title = '',
  onTitle = () => {},
  category = [],
  onCategory = () => {},
  thumbnail = '',
  onThumbnail = () => {},
  loading = false,
  saving = false,
}: MarkdownHeaderProps) => {
  const [visible, setVisible] = useState(false)
  const [tag, setTag] = useState('')
  const {
    ui: { width },
  } = useSelector((state: AppState) => state)
  const { t } = useTranslation()

  const isMobile = useMemo(() => width < 768, [width])
  const unsetTag = useCallback(
    (index: number) => onCategory(category.filter((_, i) => i !== index)),
    [category, onCategory],
  )
  const onTag = useCallback(() => {
    if (!tag || category.includes(tag)) return
    onCategory([...category, tag])
    return setTag('')
  }, [tag, category, onCategory])

  const publish = useCallback(() => {
    onPublish()
    return setVisible(false)
  }, [onPublish])

  return (
    <Row gutter={[8, 8]} align="middle" wrap={false}>
      <Col>
        <Language value={language} onChange={onLanguage} />
      </Col>
      <Col flex="auto">
        <Input
          placeholder={t('markdown.title', { returnObjects: true })}
          value={title}
          onChange={(e) => onTitle(e.target.value)}
        />
      </Col>
      <Col>
        <Button type="text" icon={<IonIcon name="trash" />} onClick={onDelete}>
          {isMobile ? undefined : t('markdown.delete', { returnObjects: true })}
        </Button>
      </Col>
      <Col>
        <Button
          type="primary"
          icon={<IonIcon name="arrow-redo" />}
          onClick={() => setVisible(true)}
          loading={loading || saving}
        >
          {!isMobile
            ? t(saving ? 'markdown.saving' : 'markdown.publish', {
                returnObjects: true,
              })
            : undefined}
        </Button>
        <Modal
          visible={visible}
          onCancel={() => setVisible(false)}
          footer={null}
          closeIcon={<IonIcon name="close" />}
        >
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Typography.Text style={{ color: 'gray' }}>
                Category
              </Typography.Text>
            </Col>
            <Col span={24}>
              <Input
                placeholder="Add category & Enter to add"
                prefix={
                  <Space size={4} style={{ marginLeft: -8 }} wrap>
                    {category.map((tag, i) => (
                      <Category
                        key={tag}
                        tag={tag}
                        onDelete={() => unsetTag(i)}
                      />
                    ))}
                  </Space>
                }
                value={tag}
                onChange={(e) => setTag(e.target.value || '')}
                onPressEnter={onTag}
              />
            </Col>
            <Col span={24}>
              <Typography.Text style={{ color: 'gray' }}>
                Thumbnail URL
              </Typography.Text>
            </Col>
            <Col span={24}>
              <Input
                title="Thumbnail URL"
                placeholder="Add thumbnail"
                value={thumbnail}
                onChange={(e) => onThumbnail(e.target.value || '')}
              />
            </Col>
            <Col span={24}>
              <Button type="primary" onClick={publish} block>
                {t(saving ? 'markdown.saving' : 'markdown.publish', {
                  returnObjects: true,
                })}
              </Button>
            </Col>
          </Row>
        </Modal>
      </Col>
    </Row>
  )
}

export default MarkdownHeader
