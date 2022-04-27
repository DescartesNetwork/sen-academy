import { env } from './runtime'
import github from './github.config'
import warehouse from './warehouse.config'

const configs = {
  github: github[env],
  warehouse: warehouse[env],
}

/**
 * Module exports
 */
export default configs
