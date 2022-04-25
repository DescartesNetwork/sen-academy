import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Col, Row, Typography } from 'antd'
import IonIcon from 'components/ionicon'

import { allPostIds, randId } from 'view/markdown/autosave'
import ArticlePreview from './articlePreview'

const Publisher = () => {
  const history = useHistory()
  const postIds = allPostIds()

  const onNew = useCallback(() => {
    const postId = randId()
    return history.push(`/edit/${postId}`)
  }, [history])

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Row gutter={[24, 24]} justify="end">
          <Col>
            <Button
              type="primary"
              icon={<IonIcon name="document-text-outline" />}
              onClick={onNew}
            >
              New Post
            </Button>
          </Col>
        </Row>
      </Col>
      {!postIds.length ? (
        <Col span={24}>
          <Typography.Text style={{ color: 'gray' }}>No post</Typography.Text>
        </Col>
      ) : null}
      <Col span={24}>
        <Row gutter={[24, 24]}>
          {postIds.map((postId) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={postId}>
              <ArticlePreview postId={postId} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Publisher
