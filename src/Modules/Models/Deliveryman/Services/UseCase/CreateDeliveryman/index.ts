import { DeliverymanRepository } from '../../../Repository/Implementation/DeliverymanRepository';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';
import { CreateDeliverymanController } from './CreateDeliverymanController';

const deliverymanRepository = DeliverymanRepository.getInstance();

const createDeliverymanUseCase = new CreateDeliverymanUseCase(deliverymanRepository);

const createDeliverymanController = new CreateDeliverymanController(createDeliverymanUseCase);

export { createDeliverymanController }