import Controller from '../Controllers/user'
import BaseRouter from './baseRouter'
import userModel from '../Models/Users'
export default class Routes extends BaseRouter<typeof userModel, Controller> {
  constructor(controller = new Controller()) {
    super(controller)
  }
}
