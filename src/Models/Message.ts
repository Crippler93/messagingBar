import { Schema, model, Types, Document } from 'mongoose'
import { Message } from '../types/Message'

export interface MessageDocument extends Document, Message {}

const schema = new Schema(
  {
    value: { type: String, required: true },
    user: { type: Types.ObjectId, required: true, ref: 'user' }
  },
  { timestamps: true, versionKey: false }
)

export default model<MessageDocument>('message', schema)
