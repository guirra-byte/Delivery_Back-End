import { IClientRepository } from "../IClientRepository";
import { IClientRequestProps } from "../IClientRepository";
import { prisma } from "../../../../../Prisma/Client/Client.prisma";
import { Client } from "@prisma/client";
import { Delivery } from "@prisma/client";
import { Client as ClientEntity } from "../../Model/Client";

export interface IFindClientRequestProps {

  username: string,
  id: string,
  delivery: Delivery[]
}

export class ClientRepository implements IClientRepository {

  private constructor(private repository: typeof prisma) {

    this.repository = prisma
  }

  private static INSTANCE: ClientRepository

  public static getInstance(): ClientRepository {

    if (!ClientRepository.INSTANCE) {

      ClientRepository.INSTANCE = new ClientRepository(prisma);
    }

    return ClientRepository.INSTANCE;
  }

  async create({ username, password, id }: IClientRequestProps): Promise<void> {

    const clientProps = {

      username: username,
      password: password,
      id: id
    }

    const createClientInEntity = new ClientEntity(clientProps);

    const client = await this
      .repository
      .client.create({

        data: {

          username,
          password,
          id
        }
      });

  }

  async findById(sub: string): Promise<(Client & { delivery: Delivery[] }) | null> {

    const findUser = await this
      .repository
      .client
      .findUnique(
        {
          where: { id: sub },
          include: {

            delivery: true
          }
        });

    return findUser;
  }

  async findAllDeliveries(client_token: string): Promise<(Client & { delivery: Delivery[] })[]> {

    const findAllClientDeliveries = await this.repository.client.findMany({

      where: { id: client_token },
      include: {

        delivery: true,

      }
    })

    return findAllClientDeliveries;
  }
}