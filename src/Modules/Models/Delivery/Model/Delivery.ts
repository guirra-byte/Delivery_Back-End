import { Entity } from '../../Client/Model/Entity';
import { v4 as uuidV4 } from 'uuid';

type DeliveryRequestProps = {

  item_name: string
  client_id: string

}

export class Delivery extends Entity<DeliveryRequestProps>{
  constructor(props: DeliveryRequestProps) {

    super(props);
  }
}
