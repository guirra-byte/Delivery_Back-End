import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../Prisma/Client/Client.prisma';
import { ClientRepository } from '../Models/Client/Repository/Implementation/ClientRepository';

const verifyClientAlreadyExists = async (request: Request, response: Response, next: NextFunction) => {

  const { username } = request.body;

  const findClientUsername = await prisma
    .client
    .findUnique({ where: { username: username } });

  if (findClientUsername) {

    return response
      .status(400)
      .json({ message: "This client username already exists, try other!" });
  }

  next();

}

export { verifyClientAlreadyExists }