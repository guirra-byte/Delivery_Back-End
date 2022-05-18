import { Client } from "../Model/Client"

export interface IClientRequestProps {

  username: string
  password: string
  id?: string
}

export interface IClientRepository {

  create({ username, password, id }: IClientRequestProps): Promise<void>
  findOne({ username }: IClientRequestProps): Promise<Client | null>
  findById(sub: string): Promise<Client | null>
}