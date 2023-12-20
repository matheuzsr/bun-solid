export default class Person {
  constructor(private name: string) { }
  
  public getName(): string {
    return this.name
  }
  
  toJSON() {
    return { name: this.getName() }
  }
}

export class PersonM extends Person {
  constructor(name: string) {
    super(name)
  }

  public getName(): string {
    const courtesy = 'Sr.'
    
    return `${courtesy} ${super.getName()}`
  }

}

export class PersonF extends Person {
  constructor(name: string) {
    super(name)
  }

  public getName(): string {
    const courtesy = 'Sra.'

    return `${courtesy} ${super.getName()}`
  }

}