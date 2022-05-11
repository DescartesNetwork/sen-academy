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

export const compareAliases = (as: string[], bs: string[]): boolean => {
  for (const a of as) {
    for (const b of bs) {
      if (compareAlias(a, b)) return true
    }
  }
  return false
}

export const compareAlias = (a: string, b: string): boolean => {
  for (const group of ALIASES) {
    const normalizedGroup = group.map((val) => val.toLowerCase())
    if (
      normalizedGroup.includes(a.toLowerCase()) &&
      group.includes(b.toLowerCase())
    )
      return true
  }
  return false
}
