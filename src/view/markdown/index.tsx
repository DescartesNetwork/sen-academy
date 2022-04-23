import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Card, Col, Row } from 'antd'
import Editor from './editor'
import Preview from './preview'

import { AppState } from 'store'

const Markdown = () => {
  const [contents, setContents] = useState('')
  const {
    ui: { theme },
  } = useSelector((state: AppState) => state)

  return (
    <Card bordered={false} bodyStyle={{ padding: 12 }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Editor id="Paper-Identity" value={contents} onChange={setContents} />
        </Col>
        <Col xs={24} md={12}>
          <Preview value={contents} theme={theme} />
        </Col>
      </Row>
    </Card>
  )
}

export default Markdown
