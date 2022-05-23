import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

import { IClientRepository } from "../../../../Repository/IClientRepository";
import { IClientRequestProps } from "../../../../Repository/IClientRepository";
import { AppError } from "../../../../../../Errors/AppError";
import { prisma } from "../../../../../../../Prisma/Client/Client.prisma";

export const tokenHash = "81699db278981865730c39c9aaaca1ad";

export class CreateClientAuthTokenUseCase {

  constructor(private clientRepository: IClientRepository) { }

  async execute({ username, password }: IClientRequestProps) {

    const verifyClientAlreadyExists = await prisma
      .client
      .findUnique({ where: { username: username } });

    if (!verifyClientAlreadyExists) {

      throw new AppError("Username or Password are incorrect!");
    }

    const verifyPassword = await compare(password, verifyClientAlreadyExists.password)

    if (!verifyPassword) {

      throw new AppError("Username or Password are incorrect!");
    }

    const authToken = sign({}, tokenHash, {

      subject: verifyClientAlreadyExists.id,
      expiresIn: "1d"
    });

    return authToken;

  }

}