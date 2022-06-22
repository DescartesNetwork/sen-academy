import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Col, Image, Row, Space, Typography } from 'antd'
import Category from 'components/category'
import MarkdownPreview from 'view/markdown/markdownPreview'

import { AppState } from 'store'
import { usePostData } from 'hooks/usePostData'

const Details = () => {
  const { language, system } = useSelector((state: AppState) => state.i18n)

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
    // for (const property of META_PROPERTY) {
    let metaImage = document.querySelector(`meta[property="og:image"]`)

    if (!metaImage) {
      metaImage = document.createElement('meta')
      metaImage.setAttribute('property', 'og:image')
      let metaImageWidth = document.querySelector(
        `meta[property="og:image:width"]`,
      )
      if (!metaImageWidth) {
        metaImageWidth = document.createElement('meta')
        metaImageWidth.setAttribute('property', 'og:image:width')
        metaImageWidth.setAttribute('content', '828')
        document.head.prepend(metaImageWidth)
      }
      let metaImageHeight = document.querySelector(
        `meta[property="og:image:height"]`,
      )
      if (!metaImageHeight) {
        metaImageHeight = document.createElement('meta')
        metaImageHeight.setAttribute('property', 'og:image:height')
        metaImageHeight.setAttribute('content', '434')
        document.head.prepend(metaImageHeight)
      }
    }
    if (thumbnail) metaImage.setAttribute('content', thumbnail)
    document.head.prepend(metaImage)
    let ogTitle = document.querySelector(`meta[property="og:title"]`)
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
    }
    if (title) metaImage.setAttribute('content', title)
    document.head.prepend(ogTitle)
    let ogDescription = document.querySelector(
      `meta[property="og:description"]`,
    )
    if (!ogDescription) {
      ogDescription = document.createElement('meta')
      ogDescription.setAttribute('property', 'og:description')
    }
    if (contents) metaImage.setAttribute('content', contents.slice(0, 100))
    return document.head.prepend(ogDescription)
  }, [contents, thumbnail, title])

  useEffect(() => {
    importDependency()
  }, [importDependency])

  useEffect(() => {
    document.title = title
    return () => (document.title = system.siteDesc)
  }, [system.siteDesc, title])

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
