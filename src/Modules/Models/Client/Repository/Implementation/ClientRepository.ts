import { IClientRepository } from "../IClientRepository";
import { IClientRequestProps } from "../IClientRepository";
import { prisma } from "../../../../../Prisma/Client/Client.prisma";
import { Client } from "../../Model/Client";
import { Delivery } from "@prisma/client";

interface IClientDeliveriesRequestProps {

  props: {

    username: string
    password: string
  },
  deliveries: Delivery[]
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

    const createClientInEntity = new Client(clientProps);

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

  async findOne({ username, password }: IClientRequestProps): Promise<Client | null> {

    const findClient = await this
      .repository
      .client
      .findUnique(
        {
          where: { username: username },
          include: {

            delivery: true
          }
        });

    if (findClient !== null) {

      const findClientRequestProps: IClientDeliveriesRequestProps = {

        props: {

          username: username,
          password: "Particular Information",
        },

        deliveries: findClient.delivery
      }

      return findClientRequestProps
    }

    return findClient
  }

  async findById(sub: string): Promise<Client | null> {

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

    if (findUser !== null) {

      const findClientByIdRequestProps: IClientDeliveriesRequestProps = {

        props: {

          username: findUser.username,
          password: "Particular Information",

        },
        deliveries: findUser.delivery
      }

      return findClientByIdRequestProps

    }

    return findUser;
  }
}