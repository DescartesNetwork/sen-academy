import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import { Card, Col, Row } from 'antd'
import MarkdownPreview from 'view/markdown/markdownPreview'
import Autosave from 'view/markdown/autosave'

export type ArticlePreviewProps = {
  postId: string
}

const ArticlePreview = ({ postId }: ArticlePreviewProps) => {
  const history = useHistory()

  const autosave = useMemo(() => new Autosave(postId), [postId])
  const initializedContents = useMemo(() => {
    return autosave.get()?.['en'].contents || ''
  }, [autosave])

  return (
    <Card
      bordered={false}
      bodyStyle={{ padding: 16, height: 256 }}
      onClick={() => history.push(`/edit/${postId}`)}
      hoverable
    >
      <Row gutter={[16, 16]} style={{ height: '100%', overflow: 'hidden' }}>
        <Col span={24}>
          <MarkdownPreview value={initializedContents} />
        </Col>
      </Row>
    </Card>
  )
}

export default ArticlePreview
