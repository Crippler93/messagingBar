import Controller from '../Controllers/state'
import BaseRouter from './baseRouter'
import stateModel from '../Models/State'

export default class Routes extends BaseRouter<typeof stateModel, Controller> {
  constructor(controller = new Controller()) {
    super(controller)
    this.controller
  }
}
