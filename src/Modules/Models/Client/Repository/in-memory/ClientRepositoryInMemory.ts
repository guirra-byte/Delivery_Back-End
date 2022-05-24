import { IClientRepository, IClientRequestProps } from '../IClientRepository';
import { Client } from '../../Model/Client';
import { Client as ClientPrisma, Delivery } from '@prisma/client';
import { IFindClientRequestProps } from '../Implementation/ClientRepository';

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

  async findById(sub: string): Promise<IFindClientRequestProps | null | undefined> {

    const findClientById = await this
      .client
      .find((client) => sub === client.props.id);

    return findClientById?.props
  }

  // async findAllDeliveries(client_token: string): Promise<Delivery[] | undefined> {

  //   const findUser = await this
  //     .client
  //     .find((clients) => client_token === clients.props.id);

  //   if (findUser === undefined) {

  //     return findUser;

  //   }

  //   const findDeliveries = await findUser
  //     .props
  // }

  async findByUsername(username: string): Promise<IFindClientRequestProps | undefined> {

    const findClient = this
      .client
      .find((client) => username === client.props.username);

    return findClient?.props
  }
}