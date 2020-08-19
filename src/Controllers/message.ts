import { Request, Response } from 'express'

import { BaseController } from './baseController'
import model from '../Models/Message'

class StateController extends BaseController {
  constructor() {
    super(model)
  }

  async getAll(req: Request, res: Response) {
    const result = await this.model.find({}).populate('user')
    return res.send(result)
  }
}

export default StateController
