import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Row, Col, Typography, Space } from 'antd'
import MakeUpHtml from 'components/makeUpHtml'
import BlockContainer from './blockContainer'

import './index.less'
import { AppState } from 'store'

const Home = () => {
  const {
    i18n: { system },
  } = useSelector((state: AppState) => state)
  const history = useHistory()

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} md={18} lg={20} xl={22} className="container banner">
        <Space direction="vertical" size={24} align="center">
          <span className="title">
            <MakeUpHtml>{system.banner.title}</MakeUpHtml>
          </span>
          <Typography.Text className="sub-title">
            {system.banner.desciption}
          </Typography.Text>
        </Space>
      </Col>
      {/* Section dev */}
      <Col span={24} className="section-bg bg-radial">
        <BlockContainer
          className="bg-circle"
          title={system.academyDev.title}
          description={system.academyDev.description}
          imgUrl={system.academyDev.src}
          button={system.academyDev.button}
          onClick={() => history.push('/blogs?category=dev')}
        />
      </Col>
      {/* Section user */}
      <Col span={24} className="section-bg">
        <BlockContainer
          title={system.academyUser.title}
          description={system.academyUser.description}
          imgUrl={system.academyUser.src}
          button={system.academyUser.button}
          floatRight
          onClick={() => history.push('/blogs?category=user')}
        />
      </Col>
    </Row>
  )
}

export default Home
