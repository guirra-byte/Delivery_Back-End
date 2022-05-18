import { ClientRepository } from "../../../Repository/Implementation/ClientRepository";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateClientController } from "./CreateClientController";


const clientRepository = ClientRepository.getInstance();

const createClientUseCase = new CreateClientUseCase(clientRepository);

const createClientController = new CreateClientController(createClientUseCase);

export { createClientController }