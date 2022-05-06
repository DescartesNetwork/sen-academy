import { useCallback, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams, useHistory } from 'react-router-dom'

import MarkdownPreview from 'view/markdown/markdownPreview'
import { Col, Image, Row, Space, Typography } from 'antd'
import ButtonExercise from 'components/buttonExercise'
import MakeUpHtml from 'components/makeUpHtml'
import Category from 'components/category'

import { asyncWait } from 'helper'
import { AppState } from 'store'
import useTranslations from 'hooks/useTranslations'
import { PostsData } from 'constant'

const META_PROPERTY = 'og:image'

const Details = () => {
  const {
    i18n: { lang },
  } = useSelector((state: AppState) => state)

  const location = useLocation()
  const history = useHistory()
  const { t } = useTranslations()
  const query = useMemo(() => new URLSearchParams(location.search), [location])

  const blogCat = query.get('category') || ''
  const { postId } = useParams<{ postId: string }>() || ''

  const postsData: PostsData[] = t.post.filter((value) => {
    const lowercaseCat = value.category.map((a: string) => a.toLowerCase())
    return lowercaseCat.includes(blogCat)
  })
  const postData = postsData.find(({ id }) => id === postId)

  const importDependency = useCallback(() => {
    if (!document) return
    let meta = document.querySelector(`meta[property="${META_PROPERTY}"]`)

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', META_PROPERTY)
    }

    if (postData?.thumbnail) meta.setAttribute('content', postData?.thumbnail)

    return document.head.prepend(meta)
  }, [postData?.thumbnail])

  useEffect(() => {
    importDependency()
  }, [importDependency])

  useEffect(() => {
    ;(async () => {
      await asyncWait(200)
      if (!postData) return history.push('/home')
    })()
  }, [history, postData])

  if (!postData) return null

  const {
    [lang]: { title, contents },
    thumbnail,
    createdAt,
    video,
  } = postData

  return (
    <Row gutter={[24, 24]} justify="center" style={{ padding: '0 12px' }}>
      <Col span={24} style={{ maxWidth: 800 }} className="container">
        <Row
          gutter={[24, 24]}
          style={{ paddingTop: 70, paddingBottom: 70 }}
          justify="center"
        >
          <Col span={24} className="post-img">
            {video ? (
              <MakeUpHtml>{video}</MakeUpHtml>
            ) : (
              <Image src={thumbnail} preview={false} />
            )}
          </Col>
          <Col span={24}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Typography.Title level={1}>{title}</Typography.Title>
              </Col>
              <Col>
                <Space>
                  {postData?.category.map((tag) => (
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
          {/* Button Quiz */}
          <ButtonExercise
            embedCode={postData?.quizButton?.embedCode}
            title={postData?.quizButton?.title}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default Details
