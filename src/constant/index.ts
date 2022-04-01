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

export type PostContent = {
  title: string
  description: string
  content: string
  thumbnail: string
  date: string
  category: string[]
}

export const DEFAULT_LIMIT_POST = 3
export type BlogCategory = 'user' | 'dev'
