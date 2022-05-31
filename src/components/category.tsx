import { Tag } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { randomColor } from 'helper'

export type CategoryProps = {
  tag: string
  onDelete?: () => void
}

const Category = ({ tag, onDelete }: CategoryProps) => {
  return (
    <Tag
      style={{
        margin: 0,
        borderRadius: 4,
        color: randomColor(tag),
      }}
      closeIcon={<IonIcon style={{ color: randomColor(tag) }} name="close" />}
      color={randomColor(tag, 0.2)}
      onClose={onDelete}
      closable={Boolean(onDelete)}
    >
      {tag}
    </Tag>
  )
}

export default Category
