import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import Prompt from './Prompt'
import { Wrapper } from './Terminal.style'

function Terminal () {
  const [history, setHistory] = useState<Array<String>>([]);
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

  const onKeyPress = (e:KeyboardEvent) => {
    switch(e.key) {
      case 'Enter':
        setHistory([...history, line])
        setLine('');
        break;
      default:
        setLine(`${line}${e.key}`)
    }
  }

  return (
    <Wrapper
      tabIndex={0}
      onBlur={focus}
      onKeyPress={onKeyPress}
      ref={ref}
    >
      {history.map((item:String) => (
        <Prompt
          key={item as string}
          command={item as string}
          isHistory
        />
      ))}
      <Prompt command={line} />
    </Wrapper>
  );
}

export default Terminal
