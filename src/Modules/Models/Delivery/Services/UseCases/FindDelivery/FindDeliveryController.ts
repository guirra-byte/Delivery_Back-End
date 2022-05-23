import { Request, Response } from 'express';
import { FindDeliveryUseCase } from './FindDeliveryUseCase';

export class FindDeliveryController {

  constructor(private findDeliveryUseCase: FindDeliveryUseCase) { }
  async handle(request: Request, response: Response) {

    const { item_name } = request.body;

    try {

      const findDelivery = await this
        .findDeliveryUseCase
        .execute(item_name);

      return response
        .status(200)
        .send(findDelivery);
    }

    catch (exception) {

      return response
        .status(404)
        .send(exception);
    }
  }
}