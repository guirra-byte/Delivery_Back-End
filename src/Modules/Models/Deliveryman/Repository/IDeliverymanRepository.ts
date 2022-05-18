import { Deliveryman } from "../Model/Deliveryman"

export interface IDeliverymanProps {

  username: string
  password: string
}

export interface IDeliverymanRepository {

  create({ username, password }: IDeliverymanProps): Promise<Deliveryman>
  findOne(username: string): Promise<Deliveryman | null>
  findById(sub: string): Promise<Deliveryman | null>
}