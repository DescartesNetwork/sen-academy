import { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import debounceRender from 'react-debounce-render'

import { Row, Col } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import ReactMarkdown from 'react-markdown'
import { Helmet } from 'react-helmet'

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
  const { theme } = useSelector((state: AppState) => state.ui)
  const syntaxStyle = theme === 'light' ? atelierCaveLight : atelierCaveDark

  return (
    <Row gutter={[8, 8]}>
      <Col span={24} style={style}>
        <ReactMarkdown
          className="markdown-preview"
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{
            code({ node, className, children, inline, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={syntaxStyle}
                  customStyle={{ borderRadius: 8, marginBottom: 16 }}
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
            script: ({ node, ...props }) => (
              <Helmet>
                <script {...props} />
              </Helmet>
            ),
          }}
        >
          {value}
        </ReactMarkdown>
      </Col>
    </Row>
  )
}

export default debounceRender(MarkdownPreview, 500)
