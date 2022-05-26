import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

import { IClientRepository } from "../../../../Repository/IClientRepository";
import { IClientRequestProps } from "../../../../Repository/IClientRepository";
import { AppError } from "../../../../../../Errors/AppError";
import { prisma } from "../../../../../../../Prisma/Client/Client.prisma";

export const tokenHash = "81699db278981865730c39c9aaaca1ad";

export interface ITokenRequestReturnProps {

  token: string,
  user: {

    username: string,
    id: string
  }
}

export class CreateClientAuthTokenUseCase {

  constructor(private clientRepository: IClientRepository) { }

  async execute({ username, password }: IClientRequestProps) {

    const verifyClientAlreadyExists = await this
      .clientRepository
      .findByUsername(username);

    if (verifyClientAlreadyExists === undefined
      || verifyClientAlreadyExists === null || verifyClientAlreadyExists.props.id === undefined) {

      throw new AppError("Username or Password are incorrect!");
    }

    const verifyPassword = await compare(password, verifyClientAlreadyExists.props.password)

    if (!verifyPassword) {

      throw new AppError("Username or Password are incorrect!");
    }

    const { id } = verifyClientAlreadyExists.props;

    const authToken = sign({}, tokenHash, {

      subject: id,
      expiresIn: "1d"
    });



    const tokenRequestReturnProps: ITokenRequestReturnProps = {

      token: authToken,
      user: {

        username: verifyClientAlreadyExists.props.username,
        id: id
      }
    }

    return tokenRequestReturnProps;

  }

}