import {models, model, Document, Schema} from 'mongoose';

export interface IRatingFeedback extends Document {
    user: Schema.Types.ObjectId;
    review: string;
    rating: number;
    reviewDate: Date;
}

const RatingFeedbackSchema = new Schema<IRatingFeedback>({
    user: {type: Schema.Types.ObjectId, required: true, ref: 'Conversation'},
    review: {type: String, required: true},
    rating: {type: Number, required: true, default: 0},
    reviewDate: {type: Date, default: Date.now},
})

const RatingFeedback = models.RatingFeedback || model<IRatingFeedback>('RatingFeedback', RatingFeedbackSchema);

export default RatingFeedback;