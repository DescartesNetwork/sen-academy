import { Env } from './runtime'

/**
 * Contructor
 */

type Conf = {
  proxy: string
  warehouseRepoUrl: string
  branch: string
}

const conf: Record<Env, Conf> = {
  /**
   * Development configurations
   */
  development: {
    proxy: 'https://cors.isomorphic-git.org',
    warehouseRepoUrl:
      'https://github.com/DescartesNetwork/sen-academy-warehouse',
    branch: 'master',
  },

  /**
   * Staging configurations
   */
  staging: {
    proxy: 'https://cors.isomorphic-git.org',
    warehouseRepoUrl:
      'https://github.com/DescartesNetwork/sen-academy-warehouse',
    branch: 'master',
  },

  /**
   * Production configurations
   */
  production: {
    proxy: 'https://cors.isomorphic-git.org',
    warehouseRepoUrl:
      'https://github.com/DescartesNetwork/sen-academy-warehouse',
    branch: 'master',
  },
}

/**
 * Module exports
 */
export default conf
