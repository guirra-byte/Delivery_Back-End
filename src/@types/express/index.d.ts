declare namespace Express {

  export interface Request {

    client: {

      id: string
    },
    deliveryman: {

      id: string
    }
  }
}