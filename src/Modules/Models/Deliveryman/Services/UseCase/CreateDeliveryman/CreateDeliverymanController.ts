import { Request, Response } from 'express';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

export class CreateDeliverymanController {

  constructor(private createDeliverymanUseCase: CreateDeliverymanUseCase) { }

  async handle(request: Request, response: Response) {

    const { username, password } = request.body;

    try {

      const createDeliveryman = await this
        .createDeliverymanUseCase
        .execute({ username, password });

      return response
        .status(201)
        .send(createDeliveryman);
    }
    catch (exception) {

      return response
        .status(400)
        .json({ message: `Your application have a error: ${exception}` });
    }
  }
}