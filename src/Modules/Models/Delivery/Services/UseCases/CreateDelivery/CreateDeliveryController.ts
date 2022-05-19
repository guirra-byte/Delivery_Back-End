import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";
import { Request, Response } from 'express';

export class CreateDeliveryController {

  constructor(private createDeliveryUseCase: CreateDeliveryUseCase) { }

  async handle(request: Request, response: Response) {

    const { id } = request.client;
    const { item_name } = request.body;

    try {

      const createDelivery = await this.createDeliveryUseCase
        .execute(item_name, id);

      return response
        .status(201)
        .send(createDelivery);
    }
    catch (exception) {

      return response
        .status(400)
        .send(exception);
    }
  }
}