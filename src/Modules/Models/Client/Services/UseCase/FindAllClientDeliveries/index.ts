import { ClientRepository } from "../../../Repository/Implementation/ClientRepository";
import { FindAllClientDeliveriesUseCase } from './FindAllClientDeliveriesUseCase'
import { FindAllClientDeliveriesController } from "./FindAllClientDeliveriesController";


const clientRepository = ClientRepository.getInstance();

const findAllClientDeliveriesUseCase = new FindAllClientDeliveriesUseCase(clientRepository);

const findAllClientDeliveriesController = new FindAllClientDeliveriesController(findAllClientDeliveriesUseCase);

export { findAllClientDeliveriesController }