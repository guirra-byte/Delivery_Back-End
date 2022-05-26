import { Client } from "../../../Model/Client";
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

    const findProps = findUser?.props

    expect(findProps)
      .toHaveProperty("id");

    expect(findProps)
      .not
      .toBeUndefined();
    //Rejeitar valor Undefined

    expect(findProps)
      .not
      .toBeNull();
    //Rejeitar Valor Null  

  });

  it("Category Already Exists", async () => {

    expect(async () => {

      const client: Client = {

        props: {

          username: "Client Username Test",
          password: "Client Password Test",
          id: "Client Id Test"
        }
      }

      const { username, password } = client.props;

      await createClientUseCase
        .execute(username, password);

      await createClientUseCase
        .execute(username, password);

    }).rejects
      .toBeInstanceOf(AppError);
  });
})