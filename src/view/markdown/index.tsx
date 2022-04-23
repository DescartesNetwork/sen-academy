import { useState } from 'react'

import { Card, Col, Row } from 'antd'
import Editor from './editor'
import Preview from './preview'

const Markdown = () => {
  const [contents, setContents] = useState('')

  return (
    <Card bordered={false} bodyStyle={{ padding: 12 }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Editor value={contents} onChange={setContents} />
        </Col>
        <Col xs={24} md={12}>
          <Preview value={contents} />
        </Col>
      </Row>
    </Card>
  )
}

export default Markdown
