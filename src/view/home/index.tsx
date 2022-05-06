import { useHistory } from 'react-router-dom'

import { Row, Col, Typography, Space } from 'antd'
import MakeUpHtml from 'components/makeUpHtml'
import BlockContainer from './blockContainer'

import useTranslations from 'hooks/useTranslations'

import './index.less'

const Home = () => {
  const history = useHistory()
  const { t } = useTranslations()

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} md={18} lg={20} xl={22} className="container banner">
        <Space direction="vertical" size={24} align="center">
          <span className="title">
            <MakeUpHtml>{t.system.banner.title}</MakeUpHtml>
          </span>
          <Typography.Text className="sub-title">
            {t.system.banner.desciption}
          </Typography.Text>
        </Space>
      </Col>
      {/* Section dev */}
      <Col span={24} className="section-bg bg-radial">
        <BlockContainer
          className="bg-circle"
          title={t.system.academyDev.title}
          description={t.system.academyDev.description}
          imgUrl={t.system.academyDev.src}
          button={t.system.academyDev.button}
          onClick={() => history.push('/blogs?category=dev')}
        />
      </Col>
      {/* Section user */}
      <Col span={24} className="section-bg">
        <BlockContainer
          title={t.system.academyUser.title}
          description={t.system.academyUser.description}
          imgUrl={t.system.academyUser.src}
          button={t.system.academyUser.button}
          floatRight
          onClick={() => history.push('/blogs?category=user')}
        />
      </Col>
    </Row>
  )
}

export default Home
