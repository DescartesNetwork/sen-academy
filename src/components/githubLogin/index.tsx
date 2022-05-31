import { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { Row, Col, Button, Typography, Card, Input, Space } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { setCredential } from 'helper/credential'
import { AppState } from 'store'

const GithubLogin = () => {
  const { system } = useSelector((state: AppState) => state.i18n)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')

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
            <Typography.Title level={4}>{system.login.title}</Typography.Title>
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
                {system.login.loginWithGithub}
              </Button>
            </Col>
            <Col>
              <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                {system.login.adminOnly}
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default GithubLogin
