import Controller from '../Controllers/state'
import BaseRouter from './baseRouter'
import { Router } from 'express'

export default class Routes extends BaseRouter {
  private controller: Controller
  constructor() {
    super(Controller)
    this.controller = new Controller()
  }
}
