import { Client } from "@prisma/client";
import { ClientRepositoryInMemory } from "../../../Repository/in-memory/ClientRepositoryInMemory";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { AppError } from '../../../../../Errors/AppError';

let clientRepository: ClientRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe("Create Client", () => {

  beforeEach(() => {

    clientRepository = new ClientRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(clientRepository);
  });

  it("Create a new Client", async () => {

    const client = {

      username: "Client Username Test",
      password: "Client Password Test"
    }

    const createClient = await createClientUseCase
      .execute(client.username, client.password);

    const findUser = await clientRepository
      .findByUsername
      (client.username);

    expect(findUser)
      .toHaveProperty("id");

    expect(findUser)
      .not
      .toBeUndefined();
    //Rejeitar valor Undefined

    expect(findUser)
      .not
      .toBeNull();
    //Rejeitar Valor Null  

  });

  it("Category Already Exists", async () => {

    expect(async () => {

      const client: Client = {

        username: "Client Username Test",
        password: "Client Password Test",
        id: "Client Id Test"
      }

      await createClientUseCase
        .execute(client.username, client.password);

      await createClientUseCase
        .execute(client.username, client.password);
    }).rejects
      .toBeInstanceOf(AppError);
  });
})