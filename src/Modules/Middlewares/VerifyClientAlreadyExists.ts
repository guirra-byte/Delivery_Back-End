import { Request, Response, NextFunction } from 'express';
import { ClientRepository } from '../Models/Client/Repository/Implementation/ClientRepository';

const verifyClientAlreadyExists = async (request: Request, response: Response, next: NextFunction) => {

  const { username } = request.body;

  const clientRepository = ClientRepository
    .getInstance();

  const findClientUsername = await clientRepository
    .findOne(username);

  if (findClientUsername) {

    return response
      .status(400)
      .json({ message: "This client username already exists, try other!" });
  }

  next();

}

export { verifyClientAlreadyExists }