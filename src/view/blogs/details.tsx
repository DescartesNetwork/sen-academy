import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { Col, Image, Row, Space, Typography } from 'antd'
import Category from 'components/category'
import MarkdownPreview from 'view/markdown/markdownPreview'

import { asyncWait } from 'helper'
import { AppState } from 'store'
import { usePostData } from 'hooks/usePostData'

const META_PROPERTY = 'og:image'

const Details = () => {
  const { language, system } = useSelector((state: AppState) => state.i18n)
  const history = useHistory()
  const { postId } = useParams<{ postId: string }>() || ''
  const postData = usePostData(postId)

  const {
    [language]: { title, contents },
    thumbnail,
    createdAt,
    category,
  } = postData

  const importDependency = useCallback(() => {
    if (!document) return
    let meta = document.querySelector(`meta[property="${META_PROPERTY}"]`)

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', META_PROPERTY)
    }

    if (thumbnail) meta.setAttribute('content', thumbnail)

    return document.head.prepend(meta)
  }, [thumbnail])

  useEffect(() => {
    importDependency()
  }, [importDependency])

  useEffect(() => {
    document.title = title
    return () => (document.title = system.siteDesc)
  }, [system.siteDesc, title])

  useEffect(() => {
    ;(async () => {
      await asyncWait(200)
      if (!createdAt) return history.push('/home')
    })()
  }, [history, createdAt])

  if (!createdAt) return null
  return (
    <Row gutter={[24, 24]} justify="center" style={{ padding: '0 12px' }}>
      <Col span={24} style={{ maxWidth: 800 }} className="container">
        <Row
          gutter={[24, 24]}
          style={{ paddingTop: 70, paddingBottom: 70 }}
          justify="center"
        >
          <Col span={24}>
            <Image className="banner-img" src={thumbnail} preview={false} />
          </Col>
          <Col span={24}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Typography.Title level={1}>{title}</Typography.Title>
              </Col>
              <Col>
                <Space>
                  {category.map((tag) => (
                    <Category key={tag} tag={tag} />
                  ))}
                  <Typography.Text type="secondary">
                    {new Date(createdAt).toLocaleDateString('en-US')}
                  </Typography.Text>
                </Space>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="post-content">
            <MarkdownPreview value={contents} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Details
