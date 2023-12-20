export type Sex =
  | 1 // Masculino
  | 2 // Feminino

export default class Person {
  constructor(private name: string, private sex: Sex) { }

  protected getName(): string {
    let courtesy = ''

    if (this.sex === 1) {
      courtesy = 'Sr.'
    }

    if (this.sex === 2) {
      courtesy = 'Sra.'
    }

    return `${courtesy} ${this.name}`
  }

  toJSON() {
    return { name: this.getName() }
  }
}