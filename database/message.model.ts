import {models, model, Document, Schema} from 'mongoose';

export interface IMessage extends Document {
    conversation: Schema.Types.ObjectId;
    content: string;
    timeStamp: Date;
}

const MessageSchema = new Schema<IMessage>({
    conversation: {type: Schema.Types.ObjectId, required: true, ref: 'Conversation'},
    content: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now},
})

const Message = models.Message || model<IMessage>('Message', MessageSchema);

export default Message;