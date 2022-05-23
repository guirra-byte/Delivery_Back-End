import { Client } from "@prisma/client";
import { Delivery } from "@prisma/client";

export interface IClientRequestProps {

  username: string
  password: string
  id?: string
}

export interface IClientRepository {

  create({ username, password, id }: IClientRequestProps): Promise<void>
  findById(sub: string): Promise<(Client & { delivery: Delivery[] }) | null>
  findAllDeliveries(client_token: string): Promise<(Client & { delivery: Delivery[] })[]>
}