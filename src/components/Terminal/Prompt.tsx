import React from 'react';
import Config from '../../config';
import Underscore from '../Underscore';

export type PromptProps = {
  command: string,
}

function Prompt({ command }: PromptProps) {
  const host:string = Config.host.replace(/^\//, '');
  const label = `${host} login:`;

  return <div>{label}&nbsp;{command}<Underscore /></div>;
}

export default Prompt;
