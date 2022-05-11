import { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'

import { Row, Col } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import ReactMarkdown from 'react-markdown'

import './index.less'
import 'katex/dist/katex.min.css'
import {
  atelierCaveDark,
  atelierCaveLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { AppState } from 'store'

export type PreviewProps = {
  value?: string
  style?: CSSProperties
}

const MarkdownPreview = ({ value = '', style = {} }: PreviewProps) => {
  const {
    ui: { theme },
  } = useSelector((state: AppState) => state)
  const syntaxStyle = theme === 'light' ? atelierCaveLight : atelierCaveDark

  return (
    <Row gutter={[8, 8]}>
      <Col span={24} style={style}>
        <ReactMarkdown
          className="markdown-preview"
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={syntaxStyle}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers
                  {...props}
                />
              ) : (
                <code className={`inline-code ${className}`} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {value}
        </ReactMarkdown>
      </Col>
    </Row>
  )
}

export default MarkdownPreview