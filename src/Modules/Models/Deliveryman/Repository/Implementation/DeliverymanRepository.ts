import { IDeliverymanProps, IDeliverymanRepository } from "../IDeliverymanRepository";
import { prisma } from "../../../../../Prisma/Client/Client.prisma";
import { Deliveryman as DeliverymanClient } from "@prisma/client";
import { Deliveryman } from "../../Model/Deliveryman";
import { Delivery } from "@prisma/client";

export interface IFindDeliverymanRequestProps {

  username: string,
  id: string,
  delivery?: Delivery[]
}

export interface IFindOneDeliveryman {

  username: string
  id: string
  delivery?: Delivery[]
}

export class DeliverymanRepository implements IDeliverymanRepository {

  constructor(private repository: typeof prisma) { }

  private static INSTANCE: DeliverymanRepository

  public static getInstance(): DeliverymanRepository {

    if (!DeliverymanRepository.INSTANCE) {

      DeliverymanRepository.INSTANCE = new DeliverymanRepository(prisma);
    }

    return DeliverymanRepository.INSTANCE;
  }

  async create({ username, password }: IDeliverymanProps): Promise<void> {

    const deliverymanProps = {

      username: username,
      password: password
    }

    const createDeliveryman = new Deliveryman(deliverymanProps);

    const deliveryman = await this
      .repository
      .deliveryman
      .create({
        data: {

          username,
          password
        }
      });

  }

  async findOne(username: string): Promise<IFindOneDeliveryman | null> {

    const findDeliveryman = await this
      .repository
      .deliveryman
      .findUnique(
        {
          where: { username: username },
          select: {

            username: true,
            delivery: true,
            id: true
          }
        });

    return findDeliveryman;
  }

  async findAllDeliverymanDeliveries(deliveryman_token: string): Promise<IFindDeliverymanRequestProps | null> {

    const findDeliverymanById = await this
      .repository
      .deliveryman
      .findUnique(
        {
          where: { id: deliveryman_token },
          select: {
            delivery: true,
            username: true,
            id: true
          }
        });

    return findDeliverymanById;
  }

}