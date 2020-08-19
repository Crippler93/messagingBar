import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    value: { type: String, required: true }
  },
  { versionKey: false }
)

export default model('state', schema)
