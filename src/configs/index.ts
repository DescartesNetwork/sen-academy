import { env } from './runtime'
import github from './github.config'

const configs = {
  github: github[env],
}

/**
 * Module exports
 */
export default configs
