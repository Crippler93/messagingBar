import { Model, Document } from 'mongoose'
import { Request, Response } from 'express'

export class BaseController {
  constructor(public model: Model<Document>) {
    this.create = this.create.bind(this)
    this.getAll = this.getAll.bind(this)
    this.deleteById = this.deleteById.bind(this)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const instance = new this.model(req.body)
    const error = instance.validateSync()
    if (!error) {
      const result = await instance.save()
      return res.send(result)
    } else {
      return res.status(400).send(error)
    }
  }

  public async getAll(_: Request, res: Response): Promise<Response> {
    const result = await this.model.find({})
    return res.send(result)
  }

  public async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const result = await this.model.findByIdAndDelete(id)
    return res.status(204).send(result)
  }
}
