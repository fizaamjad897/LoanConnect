import {models, model, Document, Schema} from 'mongoose';

export interface IConversation extends Document {
    borrower: Schema.Types.ObjectId;
    lender: Schema.Types.ObjectId;
    messages: Schema.Types.ObjectId[];
    isResolved: boolean,
}

const ConversationSchema = new Schema<IConversation>({
    borrower: {type: Schema.Types.ObjectId, ref: 'Borrower'},
    lender: {type: Schema.Types.ObjectId, ref: 'Lender'},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    isResolved: {type: Boolean, default: false},
})

const Conversation = models.Conversation || model<IConversation>('Conversation', ConversationSchema);

export default Conversation;