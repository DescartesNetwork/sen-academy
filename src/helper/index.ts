import { ALIASES } from 'constant'

export const randomColor = (seed?: string, opacity?: string | number) => {
  let hash = Math.floor(Math.random() * 16777215)
  if (seed) {
    hash = 0
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash)
    }
  }
  var rgb = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 255
    rgb[i] = value
  }
  return `rgba(${rgb[0]}, 100, ${rgb[1]},${opacity || 1})`
}

/**
 * Delay by async/await
 * @param ms - milisenconds
 * @returns
 */
export const asyncWait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const isBelongToCategory = (categories: string[], blogCat: string) => {
  const lowercaseCats = categories.map((a: string) => a.toLowerCase())
  for (let cat of lowercaseCats) {
    for (let alias in ALIASES) {
      if (alias?.includes(cat) && alias.includes(blogCat)) return true
    }
  }
  return false
}
