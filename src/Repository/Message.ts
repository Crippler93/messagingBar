import messageModel, { MessageDocument } from '../Models/Message'
import userModel from '../Models/Users'
import { Message, RepositoryResponse } from '../types/Message'

export default class MessageRepository {
  public async createOne(
    data: Message
  ): Promise<RepositoryResponse<MessageDocument>> {
    const instance = new messageModel(data)
    const error = instance.validateSync()
    // Check if user exist in DB
    const user = await userModel.findById(data.user)
    if (!user) return { code: 404, result: 'User not found' }

    if (!error) {
      const result = await instance.save()
      return { result, code: 200 }
    } else {
      return { result: error.message, code: 400 }
    }
  }
}
