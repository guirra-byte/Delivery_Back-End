import { AppError } from "../../../../../Errors/AppError";
import { IDeliveryRepository } from "../../../Repository/IDeliveryRepository";

export class UpdateDeliverymanUseCase {

  constructor(private deliveryRepository: IDeliveryRepository) { }
  async execute(item_id: string, client_id: string) {

    const updateDeliverymanInDelivery = await this
      .deliveryRepository
      .updateDeliveryDeliveryman(item_id, client_id);

    if (updateDeliverymanInDelivery === null) {

      throw new AppError("This Deliveryman does exists");
    }

    return updateDeliverymanInDelivery;
  }
}