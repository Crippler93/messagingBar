import model from '../Models/State'
import { BaseController } from './baseController'

class StateController extends BaseController<typeof model> {
  constructor() {
    super(model)
  }
}

export default StateController
