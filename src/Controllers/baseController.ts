import { Model, Document } from 'mongoose'
import { Request, Response } from 'express'

export class BaseController {
  constructor(public model: Model<Document>) {
    this.create = this.create.bind(this)
    this.getAll = this.getAll.bind(this)
  }

  public async create(req: Request, res: Response) {
    const instance = new this.model(req.body)
    const error = instance.validateSync()
    if (!error) {
      const result = await instance.save()
      return res.send(result)
    } else {
      return res.status(400).send(error)
    }
  }

  public async getAll(_: Request, res: Response) {
    const result = await this.model.find({})
    return res.send(result)
  }
}
