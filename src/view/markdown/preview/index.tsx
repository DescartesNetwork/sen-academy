import { ReactNode } from 'react'
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

export type PreviewProps = {
  header?: ReactNode
  value?: string
  theme?: 'light' | 'dark'
  className?: string
}

const Preview = ({
  header,
  value = '',
  theme = 'light',
  className = '',
}: PreviewProps) => {
  const syntaxStyle = theme === 'light' ? atelierCaveLight : atelierCaveDark

  return (
    <Row gutter={[8, 8]}>
      {header ? <Col span={24}>{header}</Col> : null}
      <Col span={24} className={className}>
        <ReactMarkdown
          className="markdown-preview"
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={syntaxStyle}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
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

export default Preview
