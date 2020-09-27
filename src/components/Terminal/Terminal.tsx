import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import Prompt from './Prompt'
import { Wrapper } from './Terminal.style'

function Terminal () {
  const [line, setLine] = useState('');
  const ref = useRef<HTMLDivElement>(null)

  function focus() {
    if (ref.current) {
      ref.current.focus()
    }
  }

  useEffect(() => {
    focus()
  }, [])

  const onKeyUp = (e:KeyboardEvent) => {
    setLine(`${line}${e.key}`)
  }

  return (
    <Wrapper
      tabIndex={0}
      onBlur={focus}
      onKeyUp={onKeyUp}
      ref={ref}
    >
      <Prompt command={line} />
    </Wrapper>
  );
}

export default Terminal
