import ClientWrong from "./wrong"
import ClientRight, { Contact } from "./right"

export default function srp() {
  const contact = new Contact('matheus@gmail.com')
  const right = new ClientRight('Matheus', 'Rocha', contact)
  console.log(right.toJSON())

    /*
  * POSITIVOS
  * Promove a coesão ao concentrar uma única responsabilidade em uma classe ou módulo.
  * Facilita a manutenção, pois cada componente lida com uma única preocupação.
  * Melhora a reusabilidade, uma vez que as classes são especializadas em tarefas específicas.
  * Torna o código mais legível e compreensível ao seguir um propósito claro para cada componente.
  */
    // const wrong = new ClientWrong('Matheus', 'Rocha', 'matheus@gmail.com')
    // console.log(wrong.toJSON())
}