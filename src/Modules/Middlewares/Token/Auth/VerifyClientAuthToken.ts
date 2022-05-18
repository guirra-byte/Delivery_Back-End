import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { tokenHash } from '../../../Models/Client/Services/UseCase/Token/Auth/CreateClientAuthTokenUseCase';
import { ClientRepository } from '../../../Models/Client/Repository/Implementation/ClientRepository';
import { AppError } from '../../../Errors/AppError';

interface IClientPayloadRequestProps {

  token: string,
  user: {

    username: string
    id: string
  }
}

const verifyClientAuthToken = async (request: Request, response: Response, next: NextFunction) => {

  const bearerToken = request.headers.authorization;

  if (bearerToken === undefined) {

    throw new AppError("Token is missing!");
  }

  const token = bearerToken.split(" ");
  const authToken = token[1];

  try {

    const verifyAuthToken = verify(authToken, tokenHash) as IClientPayloadRequestProps;

    const clientRepository = ClientRepository
      .getInstance();

    const findClientBySub = await clientRepository
      .findById(verifyAuthToken.user.id);

    if (!findClientBySub) {

      throw new AppError("This Client does exists!");
    }

    request.user = {

      id: verifyAuthToken.user.id
    }

    next();
  }
  catch (exception) {

    return response
      .status(400)
      .send(exception);
  }
}

export { verifyClientAuthToken }