import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'

import { Col, Row } from 'antd'
import ReactMarkdown from 'react-markdown'

import './index.less'
import 'katex/dist/katex.min.css'

export type PreviewProps = {
  value?: string
}

const Preview = ({ value = '' }: PreviewProps) => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24} className="textbox">
        <ReactMarkdown
          className="markdown-preview"
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
        >
          {value}
        </ReactMarkdown>
      </Col>
    </Row>
  )
}

export default Preview
