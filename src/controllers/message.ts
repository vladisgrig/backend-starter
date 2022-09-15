import { Body, Controller, Delete, Get, Params, Post, Put } from 'amala'
import { MessageModel } from '@/models/Message'
import DocumentId from '@/validators/DocumentId'
import MessagePayload from '@/validators/MessagePayload'

@Controller('/messages')
export default class MessageController {
  @Get('/')
  getMessages() {
    return MessageModel.find({})
  }

  @Post('/')
  createMessage(@Body({ required: true }) payload: MessagePayload) {
    return MessageModel.create({ text: payload.text })
  }

  @Put('/:id')
  async updateMessage(
    @Params('id') id: DocumentId,
    @Body({ required: true }) payload: MessagePayload
  ) {
    console.log(id)
    const updatedMessage = await MessageModel.findByIdAndUpdate(id, {
      text: payload.text,
    })
    return await MessageModel.findById(updatedMessage?._id)
  }

  @Delete('/:id')
  deleteMessage(@Params('id') id: DocumentId) {
    return MessageModel.findByIdAndDelete(id)
  }
}
