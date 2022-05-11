import { MouseEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Col, Row } from 'antd'
import IonIcon from 'components/ionicon'

import { deletePost } from 'helper/warehouse'
import { getCredential } from 'helper/credential'
import { PostData } from 'constant'
import Autosave from 'view/markdown/autosave'

const PostActions = ({ postId, data }: { postId: string; data: PostData }) => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const onDelete = async (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
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
    const autosave = new Autosave(postId)
    autosave.set(data)
    history.push(`/edit/${postId}`)
  }

  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <Button
          type="text"
          icon={<IonIcon name="trash-outline" />}
          onClick={onDelete}
          block
          loading={loading}
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
