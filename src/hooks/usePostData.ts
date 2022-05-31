import { PostData } from 'constant'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from 'store'

export const usePostData = (postId: string): PostData => {
  const { warehouse } = useSelector((state: AppState) => state)
  const postIds = useMemo(() => Object.keys(warehouse), [warehouse])
  const index = useMemo(
    () => postIds.findIndex((id) => id === postId),
    [postId, postIds],
  )
  const postData = Object.values(warehouse)[index]

  if (!postData) {
    return {
      id: '',
      en: {
        title: '',
        contents: '',
      },
      vn: {
        title: '',
        contents: '',
      },
      thumbnail: '',
      createdAt: 0,
      category: [],
      updatedAt: 0,
    }
  }

  return {
    id: postId,
    en: postData.en,
    vn: postData.vn,
    thumbnail: postData.thumbnail,
    createdAt: postData.createdAt,
    category: postData.category,
    updatedAt: postData.updatedAt,
  }
  // return Object.values(warehouse)[index]
}
