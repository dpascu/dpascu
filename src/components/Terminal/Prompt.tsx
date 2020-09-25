import React from 'react';
import Config from '../../config';
import Underscore from '../Underscore';

function Prompt() {
  const host:string = Config.host.replace(/^\//, '');
  const label = `${host} login:`;

  return <div>{label}&nbsp;<Underscore /></div>;
}

export default Prompt;
