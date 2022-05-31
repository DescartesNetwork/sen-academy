import { Env } from './runtime'

/**
 * Contructor
 */

type Conf = {
  source: string
}

const conf: Record<Env, Conf> = {
  /**
   * Development configurations
   */
  development: {
    source: 'https://warehouse.sentre.io/data.json',
  },

  /**
   * Staging configurations
   */
  staging: {
    source: 'https://warehouse.sentre.io/data.json',
  },

  /**
   * Production configurations
   */
  production: {
    source: 'https://warehouse.sentre.io/data.json',
  },
}

/**
 * Module exports
 */
export default conf
