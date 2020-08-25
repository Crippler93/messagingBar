import { Router } from 'express'
import { Model, Document } from 'mongoose'

import { BaseController } from '../Controllers/baseController'

export default class BaseRouter<
  M extends Model<Document>,
  C extends BaseController<M>
> {
  public router = Router()
  protected controller: C
  constructor(controller: C) {
    this.controller = controller
    this.router.get('/', this.controller.getAll)
    this.router.post('/', this.controller.create)
    this.router.delete('/:id', this.controller.deleteById)
  }
}
