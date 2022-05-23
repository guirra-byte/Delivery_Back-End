import { Delivery, Client } from "@prisma/client";
import { IFindDeliveryRequestProps, IFindManyDeliveriesHasNoDeliverymanRequestProps } from "./Implementation/DeliveryRepository";

import { IUpdateEndDateBatchPayloadRequestProps } from "./Implementation/DeliveryRepository";

export interface IDeliveryRequestProps {

  item_name: string
  client_id: string

}

export interface IDeliveryRepository {

  create({ item_name, client_id }: IDeliveryRequestProps): Promise<void>
  findOne(item_name: string): Promise<IFindDeliveryRequestProps | null>
  findManyDeliveries(): Promise<Delivery[]>
  updateDeliveryDeliveryman(item_id: string, client_id: string): Promise<(Delivery & { client: Client } | null)>
  updateDeliveryEndDate(delivery_id: string): Promise<IUpdateEndDateBatchPayloadRequestProps | null>
}