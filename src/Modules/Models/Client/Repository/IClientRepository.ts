import { Client } from "@prisma/client";
import { Delivery } from "@prisma/client";
import { IFindClientRequestProps } from "./Implementation/ClientRepository";

export interface IClientRequestProps {

  username: string
  password: string
  id?: string
}

export interface IClientRepository {

  create({ username, password, id }: IClientRequestProps): Promise<void>
  findById(sub: string): Promise<IFindClientRequestProps | null | undefined>
  // findAllDeliveries(client_token: string): Promise<Delivery[] | undefined>
  findByUsername(username: string): Promise<IFindClientRequestProps | undefined | null>
}