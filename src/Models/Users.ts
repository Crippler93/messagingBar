import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  state_id: { type: Types.ObjectId, required: true }
})

export default model('user', schema)
