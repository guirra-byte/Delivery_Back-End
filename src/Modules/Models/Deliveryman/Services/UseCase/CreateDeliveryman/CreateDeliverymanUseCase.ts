import { IDeliverymanRepository } from "../../../Repository/IDeliverymanRepository";
import { hash } from "bcryptjs";
import { Deliveryman } from '@prisma/client';
import { prisma } from "../../../../../../Prisma/Client/Client.prisma";

import { IDeliverymanProps } from "../../../Repository/IDeliverymanRepository";

export class CreateDeliverymanUseCase {

  constructor(private deliverymanRepository: IDeliverymanRepository) { }

  async execute({ username, password }: IDeliverymanProps): Promise<Deliveryman> {

    const hashThePassword = await hash(password, 10);

    console.log(hashThePassword);

    const createDeliveryman = await this.deliverymanRepository
      .create({ username, password });

    console.log(createDeliveryman.username);


    return createDeliveryman;
  }
}