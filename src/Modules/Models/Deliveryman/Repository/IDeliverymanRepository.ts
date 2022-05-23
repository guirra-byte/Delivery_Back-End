import { Deliveryman } from "@prisma/client";
import { Delivery } from "@prisma/client";
import { IFindDeliverymanRequestProps } from './Implementation/DeliverymanRepository';

export interface IDeliverymanProps {

  username: string
  password: string
}

export interface IDeliverymanRepository {

  create({ username, password }: IDeliverymanProps): Promise<Deliveryman>
  findOne(username: string): Promise<IFindDeliverymanRequestProps | null>
  findAllDeliverymanDeliveries(deliveryman_token: string): Promise<{ delivery: Delivery[]; } | null>
}