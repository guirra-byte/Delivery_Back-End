import { Request, Response } from 'express';
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanInDeliveryUseCase';

export class UpdateDeliverymanController {

  constructor(private updateDeliverymanUseCase: UpdateDeliverymanUseCase) { }

  async handle(request: Request, response: Response) {

    const { item_id } = request.body;
    const client = request.client;

    try {

      const updateDeliveryman = await this
        .updateDeliverymanUseCase
        .execute(item_id, client.id);

      return response
        .status(204)
        .send("Deliveryman have a delivery!");

    }
    catch (exception) {

      return response
        .status(400)
        .send(exception);
    }
  }
}