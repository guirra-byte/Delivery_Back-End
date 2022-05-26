import { Deliveryman } from "@prisma/client";
import { Delivery } from "@prisma/client";
import { IFindDeliverymanRequestProps } from './Implementation/DeliverymanRepository';
import { IFindOneDeliveryman } from "./Implementation/DeliverymanRepository";

export interface IDeliverymanProps {

  username: string
  password: string
}

export interface IDeliverymanRepository {

  create({ username, password }: IDeliverymanProps): Promise<void>
  findOne(username: string): Promise<IFindOneDeliveryman | null | undefined>
  findAllDeliverymanDeliveries(deliveryman_token: string): Promise<IFindDeliverymanRequestProps | null | undefined>
}