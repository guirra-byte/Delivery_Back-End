import { DeliverymanRepository } from "../../../Repository/Implementation/DeliverymanRepository";
import { FindAllDeliverymanDeliveriesUseCase } from "./FindAllDeliverymanDeliveriesUseCase";
import { FindAllDeliverymanDeliveriesController } from "./FindAllDeliverymanDeliveriesController";

const deliverymanRepository = DeliverymanRepository.getInstance();

const findAllDeliverymanDeliveriesUseCase = new FindAllDeliverymanDeliveriesUseCase(deliverymanRepository);

const findAllDeliverymanDeliveriesController = new FindAllDeliverymanDeliveriesController(findAllDeliverymanDeliveriesUseCase);

export { findAllDeliverymanDeliveriesController }

