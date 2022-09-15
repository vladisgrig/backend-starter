import { IsString } from 'amala'

export default class MessagePayload {
  @IsString()
  text!: string
}
