export interface IAddress {
  street: string
  country: string
  neighborhood: string

  getAddress(): string
}

export class Address implements IAddress {
  constructor(
    public street: string,
    public country: string,
    public neighborhood: string) { }

    getAddress(): string {
      return `${this.street}, ${this.neighborhood} - ${this.country}`
    }
}

export interface IPerson {
  name: string
  lastName: string
  address: Address

  getAddress(): string
}

export default class Person implements IPerson {
  constructor(
    public name: string,
    public lastName: string,
    public address: Address) { }

  getAddress(): string {
    return this.address.getAddress()
  }
}