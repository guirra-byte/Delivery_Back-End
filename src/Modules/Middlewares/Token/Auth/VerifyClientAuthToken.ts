import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { tokenHash } from '../../../Models/Client/Services/UseCase/Token/Auth/CreateClientAuthTokenUseCase';
import { ClientRepository } from '../../../Models/Client/Repository/Implementation/ClientRepository';
import { AppError } from '../../../Errors/AppError';

import { prisma } from '../../../../Prisma/Client/Client.prisma';

interface IPayload {

  username: string,
  sub: string
}

const verifyClientAuthToken = async (request: Request, response: Response, next: NextFunction) => {

  const bearerToken = request.headers.authorization;

  if (bearerToken === undefined) {

    throw new AppError("Token is missing!");
  }

  const token = bearerToken.split(" ");
  const authToken = token[1];

  try {

    const verifyAuthToken = verify(authToken, tokenHash) as IPayload;


    const findClientBySub = await prisma
      .client
      .findUnique(
        {
          where: { id: verifyAuthToken.sub },
          select: {

            delivery: true,
            username: true,
            id: true,
            password: false
          }
        });

    if (findClientBySub === null) {

      throw new AppError("This Client does exists!", 404);
    }

    request.client = {

      id: verifyAuthToken.sub
    }

    next();
  }
  catch (exception) {

    return response
      .status(400)
      .json({ message: `Your application have a error: ${exception}` });
  }
}

export { verifyClientAuthToken }