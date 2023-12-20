// Interface
export interface IPerson {
  name: string
  lastName: string
  street: string
  country: string
  neighborhood: string

  getAddress(): string
}

export default class Person implements IPerson {
  constructor(
    public name: string,
    public lastName: string,
    public street: string,
    public country: string,
    public neighborhood: string) { }

  public getAddress(): string {
    return `${this.street}, ${this.neighborhood} - ${this.country}`
  }
}