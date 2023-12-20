export default class Client {
  constructor(
    private name: string,
    private lastName: string,
    private contact: Contact) { }

  validateEmail(email: string) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return re.test(email)
  }

  toJSON() {
    const { name, lastName, contact } = this

    return { name, lastName, ...contact.toJSON() }
  }
}

export class Contact {
  private email: string

  constructor(email: string) {
    if (this.validateEmail(email)) {
      this.email = email
    }
    else {
      throw new Error("Invalid email!")
    }
  }

  private validateEmail(email: string) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  toJSON() {
    const { email } = this

    return { email }
  }
}