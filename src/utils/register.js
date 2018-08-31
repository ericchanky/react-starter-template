export default class Register {
  constructor() {
    this.store = {}
  }

  listen(event, handler) {
    if (this.store[event] == null) {
      this.store[event] = [handler]
    } else {
      this.store[event].push(handler)
    }
  }
}
