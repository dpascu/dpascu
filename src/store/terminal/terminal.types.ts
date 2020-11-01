import HistoryEntry from './HistoryEntry'

export interface Digest {
  input: string
}

export interface TerminalState {
  currentLine: string
  history: Array<HistoryEntry>
  isLoggedIn: boolean
  user?: string
}
