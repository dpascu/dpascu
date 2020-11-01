import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { buildPrompt } from './helpers'
import HistoryEntry from './HistoryEntry'
import { Digest, TerminalState } from './types'

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

      if (!state.isLoggedIn) {
        state.isLoggedIn = true
        state.user = input
      }

      state.history = [
        ...state.history,
        new HistoryEntry(state.currentLine, input),
      ]
      state.currentLine = buildPrompt(state)
    },
  },
})

export const { digest } = terminalSlice.actions

export default terminalSlice.reducer
