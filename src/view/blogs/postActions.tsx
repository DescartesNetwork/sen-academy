import { MouseEvent } from 'react'

import { Button, Col, Row } from 'antd'
import IonIcon from 'components/ionicon'

const PostActions = () => {
  const onDelete = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }
  const onEdit = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <Button
          type="text"
          icon={<IonIcon name="trash-outline" />}
          onClick={onDelete}
          block
        >
          Delete
        </Button>
      </Col>
      <Col span={12}>
        <Button
          type="text"
          icon={<IonIcon name="create-outline" />}
          onClick={onEdit}
          block
        >
          Edit
        </Button>
      </Col>
    </Row>
  )
}

export default PostActions
