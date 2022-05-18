import { Request, Response } from 'express';
import { CreateDeliverymanAuthTokenUseCase } from './CreateDeliverymanAuthTokenUseCase';

export class CreateDeliverymanAuthTokenController {

  constructor(private createDeliverymanAuthTokenUseCase: CreateDeliverymanAuthTokenUseCase) { }

  async handle(request: Request, response: Response) {

    const { username, password } = request.body;

    try {

      const createDeliverymanAuthToken = await this
        .createDeliverymanAuthTokenUseCase
        .execute({ username, password });

      return response
        .status(201)
        .send(createDeliverymanAuthToken);
    }
    catch (exception) {

      return response
        .status(400)
        .send(exception);
    }
  }
}