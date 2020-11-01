import Config from './config.type'

const config: Config = {
  host: process.env.PUBLIC_URL || '',
  github: process.env.REACT_APP_GITHUB || '',
}

export default config
