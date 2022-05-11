import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import MarkdownPreview from 'view/markdown/markdownPreview'
import { Col, Image, Row, Space, Typography } from 'antd'
import ButtonExercise from 'components/buttonExercise'
import MakeUpHtml from 'components/makeUpHtml'
import Category from 'components/category'

import { asyncWait } from 'helper'
import { AppState } from 'store'
import { usePostData } from 'hooks/usePostData'

const META_PROPERTY = 'og:image'

const Details = () => {
  const {
    i18n: { language },
  } = useSelector((state: AppState) => state)
  const history = useHistory()
  const { postId } = useParams<{ postId: string }>() || ''
  const {
    [language]: { title, contents },
    thumbnail,
    createdAt,
    category,
  } = usePostData(postId)

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
          <Col span={24} className="post-img">
            <Image src={thumbnail} preview={false} />
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
