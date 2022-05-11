import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from 'store'

export const usePostData = (postId: string) => {
  const { warehouse } = useSelector((state: AppState) => state)
  const postIds = useMemo(() => Object.keys(warehouse), [warehouse])
  const index = useMemo(
    () => postIds.findIndex((id) => id === postId),
    [postId, postIds],
  )
  return Object.values(warehouse)[index]
}
