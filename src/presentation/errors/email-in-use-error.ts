export class EmailInUseError extends Error {
  constructor () {
    super('The received is already in use')
    this.name = 'EmailInUseError'
  }
}
