import {models, model, Document, Schema} from 'mongoose';

export interface ILoanRequest extends Document {
    borrower: Schema.Types.ObjectId;
    amountRequested: number;
    termLength: number;
    loanPurpose: string;
    status: string;
    matchLender: Schema.Types.ObjectId;
}

const LoanRequestSchema = new Schema<ILoanRequest>({
    borrower: {type: Schema.Types.ObjectId, required: true, ref: 'Borrower'},
    amountRequested: {type: Number, required: true},
    termLength: {type: Number, default: 1},
    loanPurpose: {type: String, required: true},
    status: {type: String, required: true, default: 'pending'},
    matchLender: {type: Schema.Types.ObjectId, ref: 'Lender'}
})

const LoanRequest = models.LoanRequest || model<ILoanRequest>('LoanRequest', LoanRequestSchema);

export default LoanRequest;