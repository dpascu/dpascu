import styled from 'styled-components'

const Wrapper = styled.div`
  background: #292727;
  color: white;
  height: 100%;
  padding: 10px 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
`

const Line = styled.div`
  &:not(:last-child) {
    margin-bottom: 2px;
  }
`

export { Line, Wrapper }
