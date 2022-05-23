import { AppError } from "../../../../../Errors/AppError";
import { IDeliveryRepository } from "../../../Repository/IDeliveryRepository";

export class FindDeliveryUseCase {

  constructor(private deliveryRepository: IDeliveryRepository) { }
  async execute(item_name: string) {

    const findDelivery = await this
      .deliveryRepository
      .findOne(item_name);

    if (!findDelivery) {

      throw new AppError("Cannot find this delivery", 404);
    }

    return findDelivery;
  }
}