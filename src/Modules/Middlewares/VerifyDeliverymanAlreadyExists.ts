import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../Prisma/Client/Client.prisma';

const verifyDeliverymanAlreadyExists = async (request: Request, response: Response, next: NextFunction) => {

  const { username } = request.body;

  const findDeliveryman = await prisma
    .deliveryman
    .findUnique({ where: { username: username } });

  if (findDeliveryman) {

    return response
      .status(400)
      .json({ message: "This Deliveryman username already exists!" });
  }

  next();

}

export { verifyDeliverymanAlreadyExists }