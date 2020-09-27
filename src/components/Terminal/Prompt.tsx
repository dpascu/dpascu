import React from 'react'
import Config from '../../config'
import Underscore from '../Underscore'

type PromptProps = {
  command: string,
  isHistory?: boolean,
  user?:string|null,
}

function Prompt({ command, isHistory = false, user }: PromptProps) {
  let host:string = Config.host.replace(/^\//, '')
  let prelabel = user ? `${user}@` : ''
  let postlabel = user ? '' : ' login'
  let label = `${prelabel}${host}${postlabel}:`

  return (
    <div>
      {label}
      &nbsp;
      {command}
      {!isHistory && <Underscore />}
    </div>
  );
}

export default Prompt
