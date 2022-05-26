import { IDeliverymanRepository } from "../../../Repository/IDeliverymanRepository";
import { hash } from "bcryptjs";
import { Deliveryman } from '@prisma/client';
import { prisma } from "../../../../../../Prisma/Client/Client.prisma";

import { IDeliverymanProps } from "../../../Repository/IDeliverymanRepository";
import { AppError } from "../../../../../Errors/AppError";

export class CreateDeliverymanUseCase {

  constructor(private deliverymanRepository: IDeliverymanRepository) { }

  async execute({ username, password }: IDeliverymanProps): Promise<void> {

    const verifyUserAlreadyExists = await this.deliverymanRepository
      .findOne(username);

    if (verifyUserAlreadyExists) {

      throw new AppError("Deliveryman Username Already In Use!");
    }

    const hashThePassword = await hash(password, 10);

    const createDeliveryman = await this.deliverymanRepository
      .create({ username, password });

    return createDeliveryman;

  }
}