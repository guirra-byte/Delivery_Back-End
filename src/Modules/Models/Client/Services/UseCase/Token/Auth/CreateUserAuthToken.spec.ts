import { ClientRepositoryInMemory } from '../../../../Repository/in-memory/ClientRepositoryInMemory';
import { CreateClientAuthTokenUseCase } from './CreateClientAuthTokenUseCase';
import { CreateClientUseCase } from '../../CreateClient/CreateClientUseCase';

let clientRepository: ClientRepositoryInMemory;
let createClientAuthTokenUseCase: CreateClientAuthTokenUseCase;
let createClientUseCase: CreateClientUseCase;

describe("Create Client Auth Token", () => {

  beforeEach(() => {

    clientRepository = new ClientRepositoryInMemory();
    createClientAuthTokenUseCase = new CreateClientAuthTokenUseCase(clientRepository);
    createClientUseCase = new CreateClientUseCase(clientRepository);
  });

  it("Create a Client Auth Token", async () => {

    const client = {

      username: "Client Username Test",
      password: "Client Password Test"
    }

    const { username, password } = client;

    await createClientUseCase
      .execute(username, password);

    const createClientAuthToken = await createClientAuthTokenUseCase
      .execute({ username, password });

    expect(createClientAuthToken)
      .toHaveProperty("token");
  })
});