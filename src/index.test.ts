import { soma, createUser, User } from './index';
import { app } from './server';
import { UserRepository } from './userRepository';
import { UserUseCase } from './userUseCase';
import request from "supertest";

describe('Sum function', () => {
   test('userservice integration', ()=>{
     const repo = new UserRepository();
     const usecase = new UserUseCase(repo);
     const user = {
      name: "Shane",
      email: "shane@gmail.com",
      password: 123456
     }

     const exp = {
      id: 1,
      ...user
     }

     const result = usecase.createUser(user.name, user.email, user.password);
    expect(result).toEqual(exp)
  })
});

describe('E2E teste end to end', ()=>{
  it('quando bater na rota de health deve retornar 200 ok', async ()=>{
    //preparo a request
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
  })
})
