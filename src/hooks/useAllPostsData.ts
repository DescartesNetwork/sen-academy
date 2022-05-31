import { PostData } from 'constant'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from 'store'

export const useAllPostData = (): PostData[] => {
  const { warehouse } = useSelector((state: AppState) => state)
  const postsData: PostData[] = useMemo(
    () =>
      Object.keys(warehouse).map((id) => {
        return {
          id,
          en: warehouse[id].en,
          vn: warehouse[id].vn,
          thumbnail: warehouse[id].thumbnail,
          createdAt: warehouse[id].createdAt,
          category: warehouse[id].category,
          updatedAt: warehouse[id].updatedAt,
        }
      }),
    [warehouse],
  )

  return postsData
}
