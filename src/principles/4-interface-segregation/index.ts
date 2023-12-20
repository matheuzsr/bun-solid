import PersonWrong, { IPerson as IPersonWrong } from "./wrong"
import PersonRight, {
  IPerson as IPersonRight,
  Address, IAddress
} from "./right"

export default function isp() {
  const newPerson: IPersonWrong = new PersonWrong("John", "Doe", "123 Main St", "USA", "Downtown");
  console.log(newPerson.getAddress());


  /* POSITIVOS
  * Coesão Aprimorada: Interfaces específicas promovem classes mais coesas.
  * Facilidade de Manutenção: Classes menores são mais fáceis de entender e modificar.
  * Extensibilidade: Adicionar funcionalidades envolve criar novas interfaces.
  * Classes implementam apenas as interfaces necessárias.  
  */
  // const newAddress: IAddress = new Address("123 Main St", "USA", "Downtown")
  // const newPersonRight: IPersonRight = new PersonRight("John", "Doe", newAddress)
  // console.log(newPersonRight.getAddress())
}