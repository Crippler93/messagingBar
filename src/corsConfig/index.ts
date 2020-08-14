import { WHITE_LIST } from '../constants/envVariables'

export default {
  origin: function (origin, callback): void {
    if (WHITE_LIST.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
