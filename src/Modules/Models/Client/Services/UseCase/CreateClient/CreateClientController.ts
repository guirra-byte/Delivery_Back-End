import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {

  constructor(private createClientUseCase: CreateClientUseCase) { }
  async handle(request: Request, response: Response) {

    const { username, password } = request.body;

    try {

      const creatClient = await this
        .createClientUseCase
        .execute(username, password);

      return response
        .status(201)
        .send();
    }
    catch (exception) {

      return response
        .status(400)
        .send(exception);
    }
  }
}