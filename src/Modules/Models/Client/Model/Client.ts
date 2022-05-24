import { Entity } from "./Entity";
import { v4 as uuidV4 } from 'uuid';
import { Delivery } from "@prisma/client";

type ClientRequestProps = {

  username: string
  password: string
  id?: string
}

export class Client extends Entity<ClientRequestProps>{

  constructor(props: ClientRequestProps) {

    props.id = uuidV4();
    super(props);
  }
}