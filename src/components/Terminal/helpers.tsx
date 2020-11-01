import React from 'react'

function formatLine(line: string): Array<string | JSX.Element> {
  return line.split('').map((c) => (c === '\n' ? <br /> : c))
}

export { formatLine }
