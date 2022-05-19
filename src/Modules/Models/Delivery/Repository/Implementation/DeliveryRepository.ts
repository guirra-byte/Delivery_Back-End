import { prisma } from "../../../../../Prisma/Client/Client.prisma";
import { Delivery as DeliveryClient } from "@prisma/client";
import { Delivery } from "../../Model/Delivery";
import { IDeliveryRepository } from "../IDeliveryRepository";
import { IDeliveryRequestProps } from '../IDeliveryRepository';

export interface IFindDeliveryRequestProps {

  item_name: string
  client_id: string
  client: {

    username: string
    id: string

  }
}

export interface IFindManyDeliveriesHasNoDeliverymanRequestProps {

  props: {

    item_name: string
    client_id: string
    client: {

      username: string
      id: string
    }
  }
}

export class DeliveryRepository implements IDeliveryRepository {

  private constructor(private repository: typeof prisma) {

    this
      .repository = prisma;
  }

  private static INSTANCE: DeliveryRepository
  public static getInstance(): DeliveryRepository {

    if (!DeliveryRepository.INSTANCE) {

      DeliveryRepository
        .INSTANCE = new DeliveryRepository(prisma);
    }

    return DeliveryRepository
      .INSTANCE;
  }

  async create({ item_name, client_id }: IDeliveryRequestProps): Promise<void> {

    const deliveryProps: IDeliveryRequestProps = {

      item_name: item_name,
      client_id: client_id,

    }

    const createNewDelivery = new Delivery(deliveryProps);

    const delivery = await this
      .repository
      .delivery
      .create({

        data: {

          item_name,
          client_id
        }
      });

  }

  async findOne(item_name: string): Promise<IFindDeliveryRequestProps | null> {

    const findDelivery = await this
      .repository
      .delivery
      .findFirst(
        {
          where: { item_name: item_name },
          include: { client: true }
        });

    if (findDelivery !== null) {

      const findDeliveryRequestProps: IFindDeliveryRequestProps = {

        item_name: findDelivery.item_name,
        client_id: findDelivery.client_id,
        client: {

          username: findDelivery.client.username,
          id: findDelivery.client.id
        }
      }

      return findDeliveryRequestProps;
    }

    return findDelivery;
  }

  async findManyDeliveries(): Promise<DeliveryClient[]> {

    const findManyDeliveriesHasNoDeliveryman = await this
      .repository
      .delivery
      .findMany(
        {
          where: {
            deliveryman: undefined,
            deliveryman_id: undefined
          },
          include: {

            client: true
          }
        });

    return findManyDeliveriesHasNoDeliveryman;
  }
}

