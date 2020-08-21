import { Router } from 'express'

export default class BaseRouter {
  public router = Router()
  protected controller
  constructor(controller: any) {
    this.controller = controller
    this.router.get('/', this.controller.getAll)
    this.router.post('/', this.controller.create)
    this.router.delete('/:id', this.controller.deleteById)
  }
}
