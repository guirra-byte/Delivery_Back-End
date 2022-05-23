import { AppError } from "../../../../../Errors/AppError";
import { IDeliverymanRepository } from "../../../Repository/IDeliverymanRepository";

export class FindAllDeliverymanDeliveriesUseCase {

  constructor(private deliverymanRepository: IDeliverymanRepository) { }
  async execute(deliveryman_token: string) {

    const findAllDeliverymanDeliveries = await this
      .deliverymanRepository
      .findAllDeliverymanDeliveries(deliveryman_token);

    if (!findAllDeliverymanDeliveries) {

      throw new AppError("Not is possible find all Deliveries for this Deliveryman!");
    }

    return findAllDeliverymanDeliveries;
  }
}