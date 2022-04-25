import { LanguageType } from 'constant'

export const randId = () => {
  const LENGTH = 1000000000000
  return Math.floor(Math.random() * LENGTH).toString()
}

export type SingleArticleData = {
  title: string
  thumbnail: string
  contents: string
}
export type ArticleData = Record<LanguageType, SingleArticleData>

class Autosave {
  private id: string
  private driver = window.localStorage

  constructor(id: string) {
    this.id = id
  }

  set = (value?: ArticleData) => {
    if (!value) return this.driver.removeItem(this.id)
    return this.driver.setItem(this.id, JSON.stringify(value))
  }

  get = (): ArticleData | undefined => {
    const raw = this.driver.getItem(this.id)
    if (!raw) return undefined
    return JSON.parse(raw)
  }

  clear = () => this.set()
}

export default Autosave
