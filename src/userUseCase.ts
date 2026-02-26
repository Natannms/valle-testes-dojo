import { UserRepository } from "./userRepository";

export class UserUseCase {
  constructor(private userRepository: UserRepository) { }

  createUser(name: string, email: string, password:number){
    //chama a api do asaas e gera subs
    console.log("TESTES DOS TESTEMUNHOS TESTADOS")
    return this.userRepository.createUser(name, email, password);
  }
}