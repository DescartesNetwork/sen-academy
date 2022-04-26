import { LanguageType } from 'constant'

const DRIVER = window.localStorage
const PREFIX = 'sen-academy-post-'

export const randId = () => {
  const LENGTH = 1000000000000
  return Math.floor(Math.random() * LENGTH).toString()
}

export const allPostIds = (): string[] =>
  Object.keys(DRIVER)
    .filter((key) => key.startsWith(PREFIX))
    .map((key) => key.replace(PREFIX, ''))

export type SingleArticleData = {
  title: string
  contents: string
}
export type ArticleData = Record<LanguageType, SingleArticleData> & {
  createdAt: number
  updatedAt: number
  thumbnail: string
  category: string[]
}

class Autosave {
  private id: string

  constructor(id: string) {
    this.id = PREFIX + id
  }

  set = (value?: ArticleData) => {
    if (!value) return DRIVER.removeItem(this.id)
    return DRIVER.setItem(this.id, JSON.stringify(value))
  }

  get = (): ArticleData | undefined => {
    const raw = DRIVER.getItem(this.id)
    if (!raw) return undefined
    return JSON.parse(raw)
  }

  clear = () => this.set()
}

export default Autosave
