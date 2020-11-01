import Config from './config.type'

const config: Config = {
  host: process.env.REACT_APP_URL || '',
  github: process.env.REACT_APP_GITHUB || '',
}

export default config
