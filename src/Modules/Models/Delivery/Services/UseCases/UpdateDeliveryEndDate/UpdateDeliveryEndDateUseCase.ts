import { IDeliveryRepository } from "../../../Repository/IDeliveryRepository";
import { IUpdateEndDateBatchPayloadRequestProps } from "../../../Repository/Implementation/DeliveryRepository";


export class UpdateDeliveryEndDateUseCase {

  constructor(private deliveryRepository: IDeliveryRepository) { }

  async execute(delivery_id: string): Promise<IUpdateEndDateBatchPayloadRequestProps | null> {

    const updateEndDate = await this
      .deliveryRepository
      .updateDeliveryEndDate(delivery_id);

    return updateEndDate;
  }
}