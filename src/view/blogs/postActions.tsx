import { MouseEvent, useState } from 'react'

import { Button, Col, Row } from 'antd'
import IonIcon from 'components/ionicon'

import { deletePost } from 'helper/warehouse'
import { getCredential } from 'helper/credential'

const PostActions = ({ postId }: { postId: string }) => {
  const [loading, setLoading] = useState(false)
  const onDelete = async (e: MouseEvent<HTMLElement>) => {
    setLoading(true)
    try {
      await deletePost(postId, getCredential())
      await window.notify({
        type: 'success',
        description: 'The article has been deleted.',
      })
    } catch (er: any) {
      return window.notify({ type: 'error', description: er.message })
    } finally {
      return setLoading(false)
    }
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
