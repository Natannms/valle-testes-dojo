export function soma(primeiroValor: number, segundoValor: number): number {
  return primeiroValor + segundoValor;
}
export function createUser(name: string, email: string, password:number){
  //validations
  //joga no banco
  // retorna os dados
  return {
    status: 200,
    message: "Shane autorizou criar usuario"
  }
}

export class User {
  createUser(name: string, email: string, password:number){
    return {
      status: 200,
      message: "Shane autorizou criar usuario"
    }
  }
}