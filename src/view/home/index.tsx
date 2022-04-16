import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Row, Col, Typography, Space } from 'antd'
import MakeUpHtml from 'components/makeUpHtml'

import BlockContainer from './blockContainer'

import './index.less'

const Home = () => {
  const history = useHistory()
  const { t } = useTranslation()

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} md={18} lg={20} xl={22} className="container banner">
        <Space direction="vertical" size={24} align="center">
          <span className="title">
            <MakeUpHtml>
              {t('banner.title', { returnObjects: true })}
            </MakeUpHtml>
          </span>
          <Typography.Text className="sub-title">
            {t('banner.desciption', { returnObjects: true })}
          </Typography.Text>
        </Space>
      </Col>
      {/* Section dev */}
      <Col span={24} className="section-bg bg-radial">
        <BlockContainer
          className="bg-circle"
          title={t('academyDev.title', { returnObjects: true })}
          description={t('academyDev.description', { returnObjects: true })}
          imgUrl={t('academyDev.src', { returnObjects: true })}
          button={t('academyDev.button', { returnObjects: true })}
          onClick={() => history.push('/blogs?category=dev')}
        />
      </Col>
      {/* Section user */}
      <Col span={24} className="section-bg">
        <BlockContainer
          title={t('academyUser.title', { returnObjects: true })}
          description={t('academyUser.description', { returnObjects: true })}
          imgUrl={t('academyUser.src', { returnObjects: true })}
          button={t('academyUser.button', { returnObjects: true })}
          floatRight
          onClick={() => history.push('/blogs?category=user')}
        />
      </Col>
    </Row>
  )
}

export default Home
