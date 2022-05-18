import { Request, Response } from 'express';
import { CreateClientAuthTokenUseCase } from './CreateClientAuthTokenUseCase';

export class CreateClientAuthTokenController {

  constructor(private createClientAuthTokenUseCase: CreateClientAuthTokenUseCase) { }

  async handle(request: Request, response: Response) {

    const { username, password } = request.body;

    try {

      const createClientAuthToken = await this
        .createClientAuthTokenUseCase
        .execute({ username, password });

      return response
        .status(200)
        .send();
    }
    catch (exception) {

      return response
        .status(400)
        .send(exception);
    }
  }
}