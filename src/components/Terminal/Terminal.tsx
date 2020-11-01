import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store/rootReducer'
import { digest, HistoryEntry } from '../../store/terminal'

import { formatLine } from './helpers'
import { Line, Wrapper } from './Terminal.style'
import Underscore from '../Underscore'

const Terminal: React.FC = () => {
  const dispatch = useDispatch()
  const { currentLine, history } = useSelector(
    (state: RootState) => state.terminal
  )
  const [input, setInput] = useState<string>('')
  const ref = useRef<HTMLDivElement>(null)

  const focus = () => {
    if (ref.current) {
      ref.current.focus()
    }
  }

  useEffect(() => {
    focus()
  }, [])

  const onKeyPress = (e: KeyboardEvent) => {
    console.log(e.key, e)
    switch (e.key) {
      case 'Enter':
        dispatch(digest({ input }))
        setInput('')
        break
      case 'Backspace':
        setInput(input.slice(0, -1))
        break
      default:
        if (new RegExp(/^[a-z0-9]$/, 'i').test(e.key)) {
          setInput(`${input}${e.key}`)
        }
    }
  }

  return (
    <Wrapper tabIndex={0} onBlur={focus} onKeyDown={onKeyPress} ref={ref}>
      {history.map((item: HistoryEntry) => (
        <Line key={item.id as string}>{formatLine(item.line)}</Line>
      ))}
      <Line>
        <span>{formatLine(currentLine)}</span>
        <span>{input}</span>
        <Underscore />
      </Line>
    </Wrapper>
  )
}

export default Terminal
