import { IDeliverymanProps, IDeliverymanRepository } from "../IDeliverymanRepository";
import { prisma } from "../../../../../Prisma/Client/Client.prisma";
import { Deliveryman } from "../../Model/Deliveryman";


export class DeliverymanRepository implements IDeliverymanRepository {

  constructor(private repository: typeof prisma) { }

  private static INSTANCE: DeliverymanRepository

  public static getInstance(): DeliverymanRepository {

    if (DeliverymanRepository.INSTANCE) {

      DeliverymanRepository.INSTANCE = new DeliverymanRepository(prisma);
    }

    return DeliverymanRepository.INSTANCE;
  }

  async create({ username, password }: IDeliverymanProps): Promise<Deliveryman> {

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

    const createDeliverymanRequestProps: Deliveryman = {

      props: {

        username: username,
        password: password
      }
    }

    return createDeliverymanRequestProps;

  }

  async findOne(username: string): Promise<Deliveryman | null> {

    const findDeliveryman = await this
      .repository
      .deliveryman
      .findUnique(
        {
          where: { username: username },
          include: {

            delivery: true
          }
        });

    if (findDeliveryman !== null) {

      const findDeliverymanRequestProps: Deliveryman = {

        props: {

          username: findDeliveryman.username,
          password: findDeliveryman.password
        }
      }

      return findDeliverymanRequestProps;
    }

    return findDeliveryman;
  }

  async findById(sub: string): Promise<Deliveryman | null> {

    const findDeliverymanById = await this
      .repository
      .deliveryman
      .findUnique({ where: { id: sub } });

    if (findDeliverymanById !== null) {

      const findDeliverymanByIdRequestProps: Deliveryman = {

        props: {

          username: findDeliverymanById.username,
          password: findDeliverymanById.password
        }
      }

      return findDeliverymanByIdRequestProps;

    }

    return findDeliverymanById;
  }

}