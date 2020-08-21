import { Request, Response } from 'express'

import { BaseController } from './baseController'
import model from '../Models/Message'
import userModel from '../Models/Users'

class StateController extends BaseController {
  constructor() {
    super(model)
  }

  async getAll(_: Request, res: Response): Promise<Response> {
    const result = await this.model.find({}).populate('user')
    return res.send(result)
  }

  async create(req: Request, res: Response): Promise<Response> {
    const instance = new this.model(req.body)
    const error = instance.validateSync()
    // Check if user exist in DB
    const user = await userModel.findById(req.body.user)
    if (!user) return res.status(400).send({ message: 'user invalid' })

    if (!error) {
      const result = await instance.save()
      return res.send(result)
    } else {
      return res.status(400).send({ message: error.message })
    }
  }
}

export default StateController
