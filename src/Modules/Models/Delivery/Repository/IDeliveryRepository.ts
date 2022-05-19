import { Delivery } from "@prisma/client";
import { IFindDeliveryRequestProps, IFindManyDeliveriesHasNoDeliverymanRequestProps } from "./Implementation/DeliveryRepository";

export interface IDeliveryRequestProps {

  item_name: string
  client_id: string

}

export interface IDeliveryRepository {

  create({ item_name, client_id }: IDeliveryRequestProps): Promise<void>
  findOne(item_name: string): Promise<IFindDeliveryRequestProps | null>
  findManyDeliveries(): Promise<Delivery[]>
  updateDeliveryDeliveryman(): Promise<void>
  updateDeliveryEndDate(): Promise<void>
}