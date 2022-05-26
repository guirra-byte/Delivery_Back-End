import { IDeliverymanProps, IDeliverymanRepository } from '../IDeliverymanRepository';
import { Delivery, Deliveryman } from '@prisma/client';
import { Deliveryman as DeliverymanModel } from '../../Model/Deliveryman';
import { IFindDeliverymanRequestProps } from '../Implementation/DeliverymanRepository';
import { IFindOneDeliveryman } from '../Implementation/DeliverymanRepository';


export class DeliverymanRepositoryInMemory implements IDeliverymanRepository {

  private repository: DeliverymanModel[]

  constructor() {

    this.repository = []
  }

  async create({ username, password }: IDeliverymanProps): Promise<void> {

    const deliveryman: DeliverymanModel = {

      props: {

        username: username,
        password: password
      }

    }

    const createDeliveryman = new DeliverymanModel(deliveryman.props);

    const create = this
      .repository
      .push(createDeliveryman);
  }

  async findOne(username: string): Promise<IFindOneDeliveryman | null | undefined> {

    const findOneDeliveryman = await this
      .repository
      .find((deliveryman) => deliveryman.props.username === username);

    if (findOneDeliveryman !== undefined) {

      const requestFindOneDeliveryman = {

        username: findOneDeliveryman.props.username,
        id: findOneDeliveryman.props.id,
        delivery: findOneDeliveryman.props.delivery
      } as IFindOneDeliveryman

      return requestFindOneDeliveryman;
    }

    return findOneDeliveryman

  }

  async findAllDeliverymanDeliveries(deliveryman_token: string): Promise<IFindDeliverymanRequestProps | null | undefined> {

    const findDeliverymanAllDeliveries = await this
      .repository
      .find((deliveryman) => deliveryman.props.id === deliveryman_token)

    if (findDeliverymanAllDeliveries !== undefined) {

      const findDeliveriesRequestProps = {

        username: findDeliverymanAllDeliveries.props.username,
        id: findDeliverymanAllDeliveries.props.id,
        delivery: findDeliverymanAllDeliveries.props.delivery
      } as IFindDeliverymanRequestProps

      return findDeliveriesRequestProps
    }
  }

} 