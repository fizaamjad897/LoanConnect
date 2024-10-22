import {models, model, Document, Schema} from 'mongoose';

export interface IMessage extends Document {
    conversation: Schema.Types.ObjectId;
    content: string;
    sender: Schema.Types.ObjectId;
    timeStamp: Date;
}

const MessageSchema = new Schema<IMessage>({
    conversation: {type: Schema.Types.ObjectId, required: true, ref: 'Conversation'},
    content: {type: String, required: true},
    sender: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    timeStamp: {type: Date, default: Date.now},
})

const Message = models.Message || model<IMessage>('Message', MessageSchema);

export default Message;