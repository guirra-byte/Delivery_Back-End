import { IDeliveryRepository } from "../../../Repository/IDeliveryRepository";

export class CreateDeliveryUseCase {

  constructor(private deliveryRepository: IDeliveryRepository) { }
  async execute(item_name: string, client_id: string) {

    const createItem = await this
      .deliveryRepository
      .create({ item_name, client_id });

    return createItem;
  }
}