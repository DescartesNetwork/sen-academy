type HeaderMenu = 'home' | 'user' | 'dev' | 'subMenu'
export type SubMenu = {
  label: string
  data: string[]
}
export const HEADER_MENU: HeaderMenu[] = ['home', 'dev', 'user', 'subMenu']

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

type PostContent = {
  type: PostContentType
  text: string
}

export type PostsData = {
  id: string
  title: string
  description: string
  content: PostContent[]
  thumbnail: string
  date: string
  category: string[]
  quizButton?: EmbedData
  video?: string
}

export const DEFAULT_LIMIT_POST = 9
export type BlogCategory = 'user' | 'dev'
export type BlogTabs = { label: string; key: string }
export type LanguageType = 'en' | 'vn'
