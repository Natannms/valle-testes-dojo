export class UserRepository {
  createUser(name: string, email: string, password:number){
    //vai no baco e faz insert
    return {
      id: 1,
      name,
      email,
      password
    }
  }
}