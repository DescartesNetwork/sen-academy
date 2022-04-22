import { useState } from 'react'

import { Card, Col, Row } from 'antd'
import Editor from './editor'
import Preview from './preview'

import './index.less'
import 'easymde/dist/easymde.min.css'

const Markdown = () => {
  const [contents, setContents] = useState('')

  return (
    <Card bordered={false} bodyStyle={{ padding: 12 }}>
      <Row gutter={[24, 24]} className="editor">
        <Col xs={24} md={12}>
          <Editor value={contents} onChange={setContents} />
        </Col>
        <Col xs={24} md={12} className="textbox">
          <Preview value={contents} />
        </Col>
      </Row>
    </Card>
  )
}

export default Markdown
