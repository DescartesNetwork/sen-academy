const DRIVER = window.localStorage
const KEY = 'github'

export type GithubCredential = {
  name: string
  email: string
  token: string
}

const DEFAULT_CREDENTIAL: GithubCredential = {
  name: '',
  email: '',
  token: '',
}

export const getCredential = (): GithubCredential => {
  const raw = DRIVER.getItem(KEY)
  if (!raw) return { ...DEFAULT_CREDENTIAL }
  try {
    const data = JSON.parse(raw)
    return { ...DEFAULT_CREDENTIAL, ...data }
  } catch (er: any) {
    console.warn(er.message)
    return { ...DEFAULT_CREDENTIAL }
  }
}

export const setCredential = (credential: GithubCredential) => {
  return DRIVER.setItem(KEY, JSON.stringify(credential))
}

export const clearCredential = () => {
  return DRIVER.removeItem(KEY)
}

export const isLoggedIn = () => {
  const { name, email, token } = getCredential()
  if (!name || !email || !token) return false
  return true
}
