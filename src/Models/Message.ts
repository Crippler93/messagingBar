import { Schema, model, Types } from 'mongoose'

const schema = new Schema(
  {
    value: { type: String, required: true },
    user: { type: Types.ObjectId, required: true, ref: 'user' }
  },
  { timestamps: true, versionKey: false }
)

export default model('message', schema)
