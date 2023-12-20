export default class Client {
  private email: string

  constructor(private name: string, private lastName: string, email: string) {
    if (this.validateEmail(email)) {
      this.email = email
    }
    else {
      throw new Error("Invalid email!")
    }
  }

  validateEmail(email: string) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return re.test(email)
  }

  toJSON() {
    const { name, lastName, email } = this

    return { name, lastName, email }
  }
}