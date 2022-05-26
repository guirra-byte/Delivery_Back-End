import { Entity } from '../../Client/Model/Entity';
import { v4 as uuidV4 } from 'uuid';
import { Delivery } from '../../Delivery/Model/Delivery';

type DeliverymanRequestProps = {

  id?: string
  username: string
  password: string
  delivery?: Delivery[]
}

export class Deliveryman extends Entity<DeliverymanRequestProps>{

  constructor(props: DeliverymanRequestProps) {

    if (!props.id) {

      props.id = uuidV4();
    }
    super(props)
  }
}