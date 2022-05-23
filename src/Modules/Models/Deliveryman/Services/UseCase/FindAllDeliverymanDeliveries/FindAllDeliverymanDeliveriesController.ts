import { Request, Response } from 'express';
import { FindAllDeliverymanDeliveriesUseCase } from './FindAllDeliverymanDeliveriesUseCase';

export class FindAllDeliverymanDeliveriesController {

  constructor(private findAllDeliverymanDeliveriesUseCase: FindAllDeliverymanDeliveriesUseCase) { }
  async handle(request: Request, response: Response) {

    const deliveryman_id = request.deliveryman.id;

    try {

      const findAllDeliverymanDeliveries = await this
        .findAllDeliverymanDeliveriesUseCase
        .execute(deliveryman_id);

      return response
        .status(200)
        .send(findAllDeliverymanDeliveries);
    }
    catch (exception) {

      return response
        .status(400)
        .send(exception);
    }
  }
}