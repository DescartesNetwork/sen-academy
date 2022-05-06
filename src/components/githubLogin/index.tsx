import { useCallback, useMemo, useState } from 'react'

import { Row, Col, Button, Typography, Card, Input, Space } from 'antd'
import IonIcon from 'components/ionicon'

import { setCredential } from 'helper/credential'
import useTranslations from 'hooks/useTranslations'

const GithubLogin = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const { t } = useTranslations()

  const disabled = useMemo(() => {
    return !name || !email || !token
  }, [name, email, token])

  const login = useCallback(() => {
    if (disabled) return console.warn('Invalid credential')
    setCredential({ name, email, token })
    return window.location.reload()
  }, [disabled, name, email, token])

  return (
    <Card bordered={false}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Space>
            <IonIcon name="person-circle-outline" />
            <Typography.Title level={4}>
              {t.system.login.title}
            </Typography.Title>
          </Space>
        </Col>
        <Col span={24}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value || '')}
          />
        </Col>
        <Col span={24}>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value || '')}
          />
        </Col>
        <Col span={24}>
          <Input
            placeholder="Token"
            value={token}
            onChange={(e) => setToken(e.target.value || '')}
          />
        </Col>
        <Col span={24}>
          <Row gutter={[4, 4]} justify="center">
            <Col span={24}>
              <Button
                icon={<IonIcon name="logo-github" />}
                disabled={disabled}
                onClick={login}
                block
              >
                {t.system.login.loginWithGithub}
              </Button>
            </Col>
            <Col>
              <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                {t.system.login.adminOnly}
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default GithubLogin
