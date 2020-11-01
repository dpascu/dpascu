import Config from '../../config'
import { TerminalState } from './terminal.types'

function buildPrompt(state?: TerminalState): string {
  const { user } = state || {}
  const host: string = Config.host.replace(/^\//, '')
  const prelabel: string = user ? `${user}@` : ''
  const postlabel: string = user ? '' : ' login'
  const label = `${prelabel}${host}${postlabel}: `
  return label
}

function buildNextLine(input: string, state: TerminalState): string {
  const { isLoggedIn, user } = state

  if (!isLoggedIn) {
    return buildPrompt(state)
  }

  let output = ''

  switch (input) {
    case 'github':
      output = Config.github
      window.open(Config.github, '_blank')
      break
    case 'help':
      output = 'Nobody will help you...'
      break
    case 'whoami':
      output = `${user}`
      break
    default:
  }

  return `${output ? `${output}\n` : ''}${buildPrompt(state)}`
}

export { buildNextLine, buildPrompt }
