import { Request, Response } from 'express';
import { FindAllClientDeliveriesUseCase } from './FindAllClientDeliveriesUseCase';

export class FindAllClientDeliveriesController {

  constructor(private findAllClientDeliveriesUseCase: FindAllClientDeliveriesUseCase) { }
  async handle(request: Request, response: Response) {

    const client_id = request.client.id;
    console.log(client_id);

    try {

      const findAllClientDeliveries = await this
        .findAllClientDeliveriesUseCase
        .execute(client_id);

      return response
        .status(200)
        .send(findAllClientDeliveries);
    }
    catch (exception) {

      return response
        .status(404)
        .json({ message: { exception } });
    }
  }
}