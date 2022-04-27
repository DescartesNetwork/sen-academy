import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Button, Col, Input, Row } from 'antd'
import IonIcon from 'components/ionicon'
import Language from 'components/language'

import { LanguageType } from 'constant'
import { AppState } from 'store'

export type MarkdownHeaderProps = {
  onPublish?: () => void
  onDelete?: () => void
  language?: LanguageType
  onLanguage?: (value: LanguageType) => void
  title?: string
  onTitle?: (value: string) => void
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
  loading = false,
  saving = false,
}: MarkdownHeaderProps) => {
  const {
    ui: { width },
  } = useSelector((state: AppState) => state)
  const { t } = useTranslation()

  const isMobile = useMemo(() => width < 768, [width])

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
          onClick={onPublish}
          loading={loading || saving}
        >
          {!isMobile
            ? t(saving ? 'markdown.saving' : 'markdown.publish', {
                returnObjects: true,
              })
            : undefined}
        </Button>
      </Col>
    </Row>
  )
}

export default MarkdownHeader
