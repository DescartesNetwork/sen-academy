import { MouseEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Button, Col, Modal, Row, Typography } from 'antd'
import IonIcon from 'components/ionicon'

import { deletePost } from 'helper/warehouse'
import { getCredential } from 'helper/credential'
import { PostData } from 'constant'
import Autosave from 'view/markdown/autosave'
import { AppState } from 'store'

const PostActions = ({ postId, data }: { postId: string; data: PostData }) => {
  const { system } = useSelector((state: AppState) => state.i18n)
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const onConfirm = async (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setVisible(true)
  }
  const onCancel = async (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setVisible(false)
  }
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
      setVisible(false)
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
          onClick={onConfirm}
          block
        >
          {system.markdown.delete}
        </Button>
        <Modal visible={visible} footer={null} closable={false}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Typography.Title level={3}>
                Do you really want to delete it?
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text>
                After delete it, you never can recover it back.
              </Typography.Text>
            </Col>
            <Col span={24} />
            <Col span={12}>
              <Button type="text" onClick={onCancel} block>
                {system.markdown.cancel}
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" onClick={onDelete} loading={loading} block>
                {system.markdown.confirm}
              </Button>
            </Col>
          </Row>
        </Modal>
      </Col>
      <Col span={12}>
        <Button
          type="text"
          icon={<IonIcon name="create-outline" />}
          onClick={onEdit}
          block
        >
          {system.markdown.edit}
        </Button>
      </Col>
    </Row>
  )
}

export default PostActions
