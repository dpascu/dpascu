export default class HistoryEntry {
  id: string
  line: string
  time: number

  constructor(line: string, input: string) {
    const now: number = new Date().getTime()
    this.id = now.toString()
    this.line = `${line} ${input}`
    this.time = now
  }
}
