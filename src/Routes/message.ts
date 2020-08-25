import Controller from '../Controllers/message'
import BaseRouter from './baseRouter'
import messageModel from '../Models/Message'

export default class Routes extends BaseRouter<
  typeof messageModel,
  Controller
> {
  constructor(controller = new Controller()) {
    super(controller)
  }
}
