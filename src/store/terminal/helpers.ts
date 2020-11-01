import Config from '../../config'

interface BuildPromptArgs {
  user?: string
}

function buildPrompt({ user }: BuildPromptArgs = {}): string {
  const host: string = Config.host.replace(/^\//, '')
  const prelabel: string = user ? `${user}@` : ''
  const postlabel: string = user ? '' : ' login'
  const label = `${prelabel}${host}${postlabel}: `
  return label
}

export { buildPrompt }
