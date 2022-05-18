import { CreateClientAuthTokenController } from './CreateClientAuthTokenController';
import { CreateClientAuthTokenUseCase } from './CreateClientAuthTokenUseCase';
import { ClientRepository } from '../../../../Repository/Implementation/ClientRepository';

const clientRepository = ClientRepository.getInstance();

const createClientAuthTokenUseCase = new CreateClientAuthTokenUseCase(clientRepository);

const createClientAuthTokenController = new CreateClientAuthTokenController(createClientAuthTokenUseCase);

export { createClientAuthTokenController }