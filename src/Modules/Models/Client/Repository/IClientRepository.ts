import { Client } from "../Model/Client";
import { Delivery } from "@prisma/client";

export interface IClientRequestProps {

  username: string
  password: string
  id?: string
}

export interface IClientRepository {

  create({ username, password, id }: IClientRequestProps): Promise<void>
  findById(sub: string): Promise<Client | null | undefined>
  findByUsername(username: string): Promise<Client | null | undefined>
}