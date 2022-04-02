import { Button, Col, Image, Row, Space, Typography } from 'antd'
import { useUI } from 'providerd'

import youtube from 'static/images/social/yt.svg'
import facebook from 'static/images/social/fb.svg'
import discord from 'static/images/social/dc.svg'
import twitter from 'static/images/social/tw.svg'
import telegram from 'static/images/social/te.svg'
import medium from 'static/images/social/me.svg'
import footerLogo from 'static/images/logo/ft-logo.svg'
import footerLogoDark from 'static/images/logo/ft-logo-dark.svg'

import './index.less'

const SOCIAL_MEDIA = [
  { icon: youtube, src: '' },
  { icon: facebook, src: '' },
  { icon: discord, src: '' },
  { icon: twitter, src: '' },
  { icon: telegram, src: '' },
  { icon: medium, src: '' },
]

const Footer = () => {
  const {
    ui: { width, theme },
  } = useUI()

  const isMobile = width < 768
  const themeLogo = theme === 'dark' ? footerLogoDark : footerLogo

  return (
    <Row gutter={[16, 16]} justify="center">
      <Col span={24} className="container">
        <Row
          gutter={[24, 24]}
          style={{ padding: 24 }}
          justify="center"
          align="middle"
          className="wrap-footer"
        >
          <Col flex={!isMobile ? 'auto' : undefined}>
            <Space align="end">
              <Image src={themeLogo} preview={false} />
              <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                © 2022, All Rights Reserved
              </Typography.Text>
            </Space>
          </Col>
          <Col>
            <Space size={18}>
              {SOCIAL_MEDIA.map((social, idx) => (
                <Button
                  type="text"
                  icon={<Image src={social.icon} preview={false} />}
                  key={idx}
                  onClick={() => window.open(social.src, '_blank')}
                />
              ))}
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer
