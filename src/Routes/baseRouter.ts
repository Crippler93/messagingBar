import { Router } from 'express'

export default class BaseRouter {
  public router = Router()
  private baseController
  constructor(Controller: any) {
    this.baseController = new Controller()
    this.router.get('/', this.baseController.getAll)
    this.router.post('/', this.baseController.create)
    this.router.delete('/:id', this.baseController.deleteById)
  }
}
