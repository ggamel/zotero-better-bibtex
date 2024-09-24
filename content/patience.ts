class TimeoutError extends Error {
  timeout: number

  constructor(message: string, timeout) {
    // 'Error' breaks prototype chain here
    super(message)

    // restore prototype chain
    Object.setPrototypeOf(this, new.target.prototype)

    this.timeout = timeout
  }
}

export async function patience(timeout: number): Promise<void> {
  await Zotero.Promise.delay(timeout * 1000)
  throw new TimeoutError('Patience exceeded', timeout)
}
