import { enSystem } from 'static/base/system-en'
import { vnSystem } from 'static/base/system-vn'

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

export enum PostContentType {
  nomarl = 'normal',
  special = 'special',
}

export type PostData = {
  id: string
  en: { title: string; contents: string }
  vn: { title: string; contents: string }
  thumbnail: string
  createdAt: number
  category: string[]
  updatedAt: number
}

export const DEFAULT_LIMIT_POST = 9
export type BlogCategory = 'user' | 'dev'
export type BlogTabs = { label: string; key: string }
export type LanguageType = 'en' | 'vn'

export const ALIASES: Array<string>[] = [
  ['dev', 'developer', 'develop', 'developers', 'developing'],
  ['user', 'users', 'news', 'newspaper', 'newspapers', 'daily', 'update'],
]

export const DEFAULT_SYSTEM: Record<LanguageType, any> = {
  en: enSystem,
  vn: vnSystem,
}
