import Controller from '../Controllers/message'
import BaseRouter from './baseRouter'

export default class Routes extends BaseRouter {
  constructor(controller = new Controller()) {
    super(controller)
  }
}
