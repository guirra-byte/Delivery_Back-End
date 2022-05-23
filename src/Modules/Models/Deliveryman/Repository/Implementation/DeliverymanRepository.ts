import { IDeliverymanProps, IDeliverymanRepository } from "../IDeliverymanRepository";
import { prisma } from "../../../../../Prisma/Client/Client.prisma";
import { Deliveryman as DeliverymanClient } from "@prisma/client";
import { Deliveryman } from "../../Model/Deliveryman";
import { Delivery } from "@prisma/client";

export interface IFindDeliverymanRequestProps {

  username: string,
  id: string,
  delivery: Delivery[]
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

  async create({ username, password }: IDeliverymanProps): Promise<DeliverymanClient> {

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

    return deliveryman;

  }

  async findOne(username: string): Promise<IFindDeliverymanRequestProps | null> {

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

    if (findDeliveryman !== null) {

      const findDeliverymanRequestProps: IFindDeliverymanRequestProps = {

        username: findDeliveryman.username,
        id: findDeliveryman.id,
        delivery: findDeliveryman.delivery
      }

      return findDeliverymanRequestProps;
    }

    return findDeliveryman;
  }

  async findAllDeliverymanDeliveries(deliveryman_token: string): Promise<{ delivery: Delivery[]; } | null> {

    const findDeliverymanById = await this
      .repository
      .deliveryman
      .findUnique(
        {
          where: { id: deliveryman_token },
          select: {
            delivery: true
          }
        });

    return findDeliverymanById;
  }

}