import { useEffect, useMemo } from 'react'
import { useLocation, useParams, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atelierCaveDark,
  atelierCaveLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { Col, Image, Row, Space, Typography } from 'antd'
import PostTags from './postTags'
import { PostContentType, PostsData } from 'constant'
import MakeUpHtml from 'components/makeUpHtml'
import ButtonExercise from 'components/buttonExercise'
import { asyncWait } from 'helper'
import { useSelector } from 'react-redux'
import { AppState } from 'store'
import { Helmet } from 'react-helmet'

const Details = () => {
  const location = useLocation()
  const history = useHistory()
  const { t } = useTranslation()
  const query = useMemo(() => new URLSearchParams(location.search), [location])
  const {
    ui: { theme },
  } = useSelector((state: AppState) => state)

  const blogCat = query.get('category') || ''
  const { postId } = useParams<{ postId: string }>() || ''

  const postsData: PostsData[] = t(`postsData.${blogCat}`, {
    returnObjects: true,
  })
  const postData = postsData.find(({ id }) => id === postId)
  const syntaxStyle = theme === 'dark' ? atelierCaveLight : atelierCaveDark

  useEffect(() => {
    ;(async () => {
      await asyncWait(200)
      if (!postData) return history.push('/home')
    })()
  }, [history, postData])

  return (
    <Row gutter={[24, 24]} justify="center" style={{ padding: '0 12px' }}>
      {/* add image to meta tag for sharing post */}
      <Helmet>
        <meta name="image" property="og:image" content={postData?.thumbnail} />
      </Helmet>
      <Col span={24} style={{ maxWidth: 800 }} className="container">
        <Row
          gutter={[24, 24]}
          style={{ paddingTop: 70, paddingBottom: 70 }}
          justify="center"
        >
          <Col span={24} className="post-img">
            {postData?.video ? (
              <MakeUpHtml>{postData.video}</MakeUpHtml>
            ) : (
              <Image src={postData?.thumbnail} preview={false} />
            )}
          </Col>
          <Col span={24}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Typography.Title level={1}>{postData?.title}</Typography.Title>
              </Col>
              <Col>
                <Space>
                  <PostTags tags={postData?.category} />
                  <Typography.Text type="secondary">
                    {postData?.date}
                  </Typography.Text>
                </Space>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="post-content">
            {postData?.content?.map((content, idx) => {
              const { type, text } = content
              if (type === PostContentType.special)
                // Return react high light for code content
                return (
                  <SyntaxHighlighter
                    key={idx}
                    language="react"
                    style={syntaxStyle}
                  >
                    {text}
                  </SyntaxHighlighter>
                )

              return <MakeUpHtml key={idx}>{text}</MakeUpHtml>
            })}
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
