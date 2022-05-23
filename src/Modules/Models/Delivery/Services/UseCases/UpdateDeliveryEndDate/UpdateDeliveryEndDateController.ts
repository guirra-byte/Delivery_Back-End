import { Request, Response } from 'express';
import { UpdateDeliveryEndDateUseCase } from './UpdateDeliveryEndDateUseCase';

export class UpdateDeliveryEndDateController {

  constructor(private updateDeliveryEndDateUseCase: UpdateDeliveryEndDateUseCase) { }

  async handle(request: Request, response: Response) {

    const { delivery_id } = request.body;

    try {

      const updateDeliveryEndDate = await this
        .updateDeliveryEndDateUseCase
        .execute(delivery_id);

      return response
        .status(204)
        .send("The delivery end date are updated!");
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}