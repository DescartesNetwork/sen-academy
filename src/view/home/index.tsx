import { Row, Col, Typography, Space } from 'antd'
import MakeUpHtml from 'components/makeUpHtml'
import { useHistory } from 'react-router-dom'

import { coreData } from 'static/base/core'
import BlockContainer from './blockContainer'

import './index.less'

const {
  banner: { title, desciption },
  academyUser: {
    title: userTitle,
    description: userDesc,
    button: userBtn,
    src: userSrc,
  },
  academyDev: {
    title: devTitle,
    description: devDesc,
    button: devBtn,
    src: devSrc,
  },
} = coreData

const Home = () => {
  const history = useHistory()

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} md={18} lg={20} xl={22} className="container banner">
        <Space direction="vertical" size={24} align="center">
          <span className="title">
            <MakeUpHtml>{title}</MakeUpHtml>
          </span>
          <Typography.Text className="sub-title">{desciption}</Typography.Text>
        </Space>
      </Col>
      {/* Section dev */}
      <Col span={24} className="section-bg bg-radial">
        <BlockContainer
          className="bg"
          title={devTitle}
          description={devDesc}
          imgUrl={devSrc}
          button={devBtn}
          onClick={() => history.push('/blogs?category=user')}
        />
      </Col>
      {/* Section user */}
      <Col span={24} className="section-bg">
        <BlockContainer
          title={userTitle}
          description={userDesc}
          imgUrl={userSrc}
          button={userBtn}
          floatRight
          onClick={() => history.push('/blogs?category=dev')}
        />
      </Col>
    </Row>
  )
}

export default Home
