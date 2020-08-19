import { Schema, model } from 'mongoose'

const schema = new Schema({
  value: { type: String, required: true }
})

export default model('message', schema)
