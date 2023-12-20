import LogAdapterServiceRight, { LogCSV, LogJSON } from "./right"
import LogServiceWrong from "./wrong"

export default function dip() {
  new LogServiceWrong().write('CSV', 'Teste')
  new LogServiceWrong().write('JSON', 'Teste')


  /* POSITIVOS
  * Desacoplamento: Reduz a dependência direta entre módulos, promovendo flexibilidade.
  * Flexibilidade: Facilita a substituição de implementações e adaptações.
  * Testabilidade Aprimorada: Simplifica testes de unidades e criação de mocks.
  * Facilita Extensões: Adição de módulos sem alterar o código existente.
  */
  // const logCSV = new LogCSV()
  // const logJSON = new LogJSON()
  // const adapter = new LogAdapterServiceRight(logCSV)
  // adapter.write('Testando adapter')
  
  // adapter.setLog(logJSON)
  // adapter.write('Testando adapter')
}
