import { IDeliverymanRepository } from "../../../Repository/IDeliverymanRepository";
import { hash } from "bcryptjs";
import { Deliveryman } from "../../../Model/Deliveryman";

export class CreateDeliverymanUseCase {

  constructor(private deliverymanRepository: IDeliverymanRepository) { }

  async execute(username: string, password: string): Promise<Deliveryman> {

    const hashThePassword = await hash(password, 10);

    const createDeliveryman = await this
      .deliverymanRepository
      .create({ username, password: hashThePassword });

    return createDeliveryman;
  }
}