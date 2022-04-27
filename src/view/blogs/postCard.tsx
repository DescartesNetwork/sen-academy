import { useSelector } from 'react-redux'

import { Card, Col, Image, Row, Space, Typography } from 'antd'
import PostActions from './postActions'

import { isLoggedIn } from 'components/githubLogin/utils'
import { PostsData } from 'constant'
import { AppState } from 'store'

export type PostCardProps = {
  data: PostsData
  onClick: (id: string) => void
}

const PAGE_PADDING = 24
const ELEMENT_PADDING = 24
const HEIGHT_RATIO = 1.777777

const PostCard = ({ data, onClick = () => {} }: PostCardProps) => {
  const {
    ui: { width },
  } = useSelector((state: AppState) => state)
  const { id, title, thumbnail, description, date } = data

  const isMobile = width < 768
  const elementPaddingCount = width < 992 ? 5 : 8
  const heightRatio = isMobile
    ? HEIGHT_RATIO
    : width < 992
    ? HEIGHT_RATIO * 2
    : HEIGHT_RATIO * 3
  const desktopSpacing = PAGE_PADDING + ELEMENT_PADDING * elementPaddingCount

  return (
    <Card
      onClick={() => onClick(id)}
      bordered={false}
      bodyStyle={{ padding: 24, cursor: 'pointer' }}
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card
            style={{ borderRadius: 8, overflow: 'hidden' }}
            bodyStyle={{ padding: 0 }}
            bordered={false}
            className="post-card"
          >
            <Image
              style={{
                height: !isMobile
                  ? Math.min(
                      (1200 - desktopSpacing) / heightRatio,
                      (width - desktopSpacing) / heightRatio,
                    )
                  : (width - PAGE_PADDING - ELEMENT_PADDING * 2) / heightRatio,
              }}
              src={thumbnail}
              preview={false}
            />
          </Card>
        </Col>
        <Col span={24} className="warp-post-card">
          <Space direction="vertical">
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              {date}
            </Typography.Text>
            <Typography.Title level={3} className="warp-post-card-title">
              {title}
            </Typography.Title>
            <Typography.Text className="warp-post-card-description">
              {description}
            </Typography.Text>
          </Space>
        </Col>
        {isLoggedIn() ? (
          <Col span={24}>
            <PostActions />
          </Col>
        ) : null}
      </Row>
    </Card>
  )
}
export default PostCard
