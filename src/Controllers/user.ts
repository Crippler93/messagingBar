import model from '../Models/Users'
import { BaseController } from './baseController'

class StateController extends BaseController {
  constructor() {
    super(model)
  }
}

export default StateController
