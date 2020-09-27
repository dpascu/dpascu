import React from 'react';
import Config from '../../config';
import Underscore from '../Underscore';

type PromptProps = {
  command: string,
  isHistory?: boolean,
}

function Prompt({ command, isHistory = false }: PromptProps) {
  const host:string = Config.host.replace(/^\//, '');
  const label = `${host} login:`;

  return (
    <div>
      {label}
      &nbsp;
      {command}
      {!isHistory && <Underscore />}
    </div>
  );
}

export default Prompt;
