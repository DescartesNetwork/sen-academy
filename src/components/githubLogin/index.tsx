import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Row, Col, Button, Typography, Card, Input, Space } from 'antd'
import IonIcon from 'components/ionicon'
import { setCredential } from './utils'

const GithubLogin = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const { t } = useTranslation()

  const disabled = useMemo(() => {
    return !name || !email || !token
  }, [name, email, token])

  const login = useCallback(() => {
    if (disabled) return console.warn('Invalid credential')
    return setCredential({ name, email, token })
  }, [disabled, name, email, token])

  return (
    <Card bordered={false}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Space>
            <IonIcon name="person-circle-outline" />
            <Typography.Title level={4}>
              {t('login.title', { returnObjects: true })}
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
                {t('login.loginWithGithub', { returnObjects: true })}
              </Button>
            </Col>
            <Col>
              <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                {t('login.adminOnly', { returnObjects: true })}
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default GithubLogin
