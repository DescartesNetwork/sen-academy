import { Button, Col, Image, Row, RowProps, Space, Typography } from 'antd'
import { useUI } from 'providerd'

type BlockProps = {
  imgUrl: string
  title: string
  description: string
  button: string
  floatRight?: boolean
  disabled?: boolean
  onClick?: () => void
} & RowProps
const ELM_FLOAT = {
  first: 1,
  sec: 2,
}
const MAX_WIDTH_MOBILE = 768

const BlockContainer = ({
  imgUrl,
  title,
  description,
  button,
  floatRight = false,
  disabled = false,
  onClick = () => {},
  ...rest
}: BlockProps) => {
  const {
    ui: { width },
  } = useUI()

  const isMobile = width < MAX_WIDTH_MOBILE
  const firstElm = floatRight ? 'first' : 'sec'
  const secElm = !floatRight ? 'first' : 'sec'
  const firstOrder = isMobile ? 1 : ELM_FLOAT[firstElm]
  const secOrder = isMobile ? 2 : ELM_FLOAT[secElm]

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col span={24} className="container">
        <Row gutter={[32, 32]} justify="center" align="middle" {...rest}>
          {/* image */}
          <Col xs={24} md={12} order={firstOrder}>
            <Image src={imgUrl} preview={false} />
          </Col>
          {/* content */}
          <Col
            xs={24}
            md={12}
            style={{ textAlign: isMobile ? 'center' : undefined }}
            order={secOrder}
          >
            <Space direction="vertical" size={24}>
              <Space direction="vertical" size={16}>
                <Typography.Title level={1}>{title}</Typography.Title>
                <Typography.Text type="secondary">
                  {description}
                </Typography.Text>
              </Space>
              <Button type="primary" onClick={onClick} disabled={disabled}>
                {button}
              </Button>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export default BlockContainer
