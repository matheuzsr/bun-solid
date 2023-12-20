import PersonWrong from "./wrong"
import { PersonF,PersonM } from "./right"

export default function srp() {
  const wrong = new PersonWrong('Matheus', 1)
  console.log(wrong.toJSON())

  /*
  * POSITIVOS
  * Facilita a adição de funcionalidades sem modificar o código existente.
  * Código modular é mais fácil de manter, reduzindo o risco de bugs.
  * Permite o reuso de componentes em diferentes contextos.
  * Minimiza a necessidade de alterar código existente.
  */
  // const rightM = new PersonM('Matheus')
  // const rightF = new PersonF('Monique')
  // console.log(rightM.toJSON())
  // console.log(rightF.toJSON())
}
