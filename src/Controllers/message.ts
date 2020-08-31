import { Request, Response } from 'express'

import { BaseController } from './baseController'
import model from '../Models/Message'

import MessageRepo from '../Repository/Message'

class MessageController extends BaseController<typeof model> {
  private repo = new MessageRepo()
  constructor() {
    super(model)
  }

  async getAll(_: Request, res: Response): Promise<Response> {
    const result = await this.model.find({}).populate('user')
    return res.send(result)
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { code, result } = await this.repo.createOne(req.body)
    return res.status(code).send(result)
  }
}

export default MessageController
