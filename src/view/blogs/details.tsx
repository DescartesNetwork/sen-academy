import { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Col, Image, Row, Space, Typography } from 'antd'
import PostTags from './postTags'
import { PostsData } from 'constant'

const Details = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const query = useMemo(() => new URLSearchParams(location.search), [location])

  const blogCat = query.get('category') || ''
  const { postId } = useParams<{ postId: string }>() || ''

  const postsData: PostsData[] = t(`postsData.${blogCat}`, {
    returnObjects: true,
  })
  const postData = postsData.find(({ id }) => id === postId)

  return (
    <Row gutter={[24, 24]} justify="center" style={{ padding: '0 12px' }}>
      <Col span={24} className="container">
        <Row
          gutter={[24, 24]}
          style={{ paddingTop: 70, paddingBottom: 70 }}
          justify="center"
        >
          <Col span={24} className="post-img">
            <Image src={postData?.thumbnail} preview={false} />
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
          <Col span={24}>
            <Typography.Text>{postData?.content}</Typography.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Details
