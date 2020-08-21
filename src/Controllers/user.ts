import { Request, Response } from 'express'

import model from '../Models/Users'
import stateModel from '../Models/State'
import { BaseController } from './baseController'

class StateController extends BaseController {
  constructor() {
    super(model)
  }

  async create(req: Request, res: Response): Promise<Response> {
    const instance = new this.model(req.body)
    const error = instance.validateSync()
    // Check if state_id exist in DB
    const state = await stateModel.findById(req.body.state_id)
    if (!state) return res.status(400).send({ message: 'state_id invalid' })

    if (!error) {
      const result = await instance.save()
      return res.send(result)
    } else {
      return res.status(400).send({ message: error.message })
    }
  }
}

export default StateController
