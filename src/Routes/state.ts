import Controller from '../Controllers/state'
import BaseRouter from './baseRouter'

export default class Routes extends BaseRouter {
  constructor(controller = new Controller()) {
    super(controller)
  }
}
