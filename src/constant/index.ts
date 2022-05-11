type HeaderMenu = 'home' | 'user' | 'dev' | 'admin'
export type SubMenu = {
  label: string
  data: string[]
}
export const HEADER_MENU: HeaderMenu[] = ['home', 'dev', 'user', 'admin']

export enum SelectedTabs {
  all = 'all',
  blockchain = 'blockchain',
  liquidity = 'liquidity',
}

type EmbedData = {
  title: string
  embedCode: string
}

export enum PostContentType {
  nomarl = 'normal',
  special = 'special',
}

export type PostsData = {
  id: string
  en: { title: string; contents: string }
  vn: { title: string; contents: string }
  thumbnail: string
  createdAt: number
  category: string[]
  updatedAt: number
  quizButton?: EmbedData
  video?: string
}

export const DEFAULT_LIMIT_POST = 9
export type BlogCategory = 'user' | 'dev'
export type BlogTabs = { label: string; key: string }
export type LanguageType = 'en' | 'vn'

export const ALIASES: Array<string>[] = [
  ['dev', 'developer', 'develop', 'developers', 'developing'],
  ['user', 'users'],
]
