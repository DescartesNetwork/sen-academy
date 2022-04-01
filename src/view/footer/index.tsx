import { Button, Col, Image, Row, Space } from 'antd'

import youtube from 'static/images/social/yt.svg'
import facebook from 'static/images/social/fb.svg'
import discord from 'static/images/social/dc.svg'
import twitter from 'static/images/social/tw.svg'
import telegram from 'static/images/social/te.svg'
import medium from 'static/images/social/me.svg'

const SOCIAL_MEDIA = [
  { icon: youtube, src: '' },
  { icon: facebook, src: '' },
  { icon: discord, src: '' },
  { icon: twitter, src: '' },
  { icon: telegram, src: '' },
  { icon: medium, src: '' },
]

const Footer = () => {
  return (
    <Row gutter={[16, 16]} justify="center">
      <Col span={24} className="container">
        <Row gutter={[24, 24]}>
          <Col flex="auto"></Col>
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
