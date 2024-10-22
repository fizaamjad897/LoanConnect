import {models, model, Document, Schema} from 'mongoose';

export interface ILender extends Document {
    user: Schema.Types.ObjectId;
    availableFunds: number;
    loansFunded: Schema.Types.ObjectId[];
    totalLoansLent: number;
}

const LenderSchema = new Schema<ILender>({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    availableFunds: {type: Number, default: 0},
    loansFunded: [{type: Schema.Types.ObjectId, ref: 'LoanRequest'}],
    totalLoansLent: {type: Number, default: 0}
})

const Lender = models.Lender || model<ILender>('Lender', LenderSchema);

export default Lender;