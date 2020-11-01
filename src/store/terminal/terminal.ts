import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { buildNextLine, buildPrompt } from './helpers'
import HistoryEntry from './HistoryEntry'
import { Digest, TerminalState } from './terminal.types'

const initialState: TerminalState = {
  currentLine: buildPrompt(),
  history: [],
  isLoggedIn: false,
  user: undefined,
}

const terminalSlice = createSlice({
  name: 'terminal',
  initialState,
  reducers: {
    digest(state, action: PayloadAction<Digest>) {
      const { input } = action.payload

      state.history = [
        ...state.history,
        new HistoryEntry(state.currentLine, input),
      ]

      if (!state.isLoggedIn) {
        state.isLoggedIn = true
        state.user = input
        state.currentLine = buildPrompt(state)
      } else {
        state.currentLine = buildNextLine(input, state)
      }
    },
  },
})

export const { digest } = terminalSlice.actions

export default terminalSlice.reducer
