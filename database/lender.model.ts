import {models, model, Document, Schema} from 'mongoose';

export interface ILender extends Document {
    name: string;
    email: string;
    availableFunds: number;
    loansFunded: Schema.Types.ObjectId[];
    rating: number;
    totalLoansLent: number;
}

const LenderSchema = new Schema<ILender>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    availableFunds: {type: Number, default: 0},
    loansFunded: [{type: Schema.Types.ObjectId, ref: 'LoanRequest'}],
    rating: {type: Number, default: 0},
    totalLoansLent: {type: Number, default: 0}
})

const Lender = models.Lender || model<ILender>('Lender', LenderSchema);

export default Lender;