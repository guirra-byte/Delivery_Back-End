import { IClientRepository, IClientRequestProps } from '../IClientRepository';
import { Client } from '../../Model/Client';
import { Client as ClientPrisma } from '@prisma/client';

export class ClientRepositoryInMemory implements IClientRepository {

  private client: Client[]

  constructor() {

    this.client = [];
  }

  async create({ username, password }: IClientRequestProps): Promise<void> {

    const clientProps: Client = {

      props: {

        username: username,
        password: password,
      }

    }

    const client = new Client(clientProps.props);

    const createClient = await this
      .client
      .push(client);

  }

  async findById(sub: string): Promise<Client | undefined> {

    const findClientById = await this
      .client
      .find((client) => sub === client.props.id);

    if (findClientById !== undefined && findClientById.props.id !== undefined) {

      const client: Client = {

        props: {

          username: findClientById.props.username,
          password: findClientById.props.password,
          id: findClientById.props.id
        }
      }

      return client;
    }

    return findClientById;
  }


  async findByUsername(username: string): Promise<Client | undefined> {

    const findClient = this
      .client
      .find((client) => username === client.props.username);

    return findClient
  }
}