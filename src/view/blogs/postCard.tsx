import { Card, Col, Image, Row, Space, Typography } from 'antd'
import { PostContent } from 'constant'

const PostCard = ({ data }: { data: PostContent }) => {
  const { title, thumbnail, description, date } = data

  return (
    <Card bordered={false} bodyStyle={{ padding: 24, cursor: 'pointer' }}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card
            style={{ borderRadius: 8, overflow: 'hidden' }}
            bodyStyle={{ padding: 0 }}
            bordered={false}
          >
            <Image src={thumbnail} preview={false} />
          </Card>
        </Col>
        <Col span={24}>
          <Space direction="vertical">
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              {date}
            </Typography.Text>
            <Typography.Title level={3}>{title}</Typography.Title>
            <Typography.Text>{description}</Typography.Text>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}
export default PostCard
