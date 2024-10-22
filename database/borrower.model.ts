import {models, model, Document, Schema} from 'mongoose';

export interface IBorrower extends Document {
    user: Schema.Types.ObjectId;
    creditScore: number;
    loanRequests: Schema.Types.ObjectId[];
    totalLoansBorrowed: number;
}

const BorrowerSchema = new Schema<IBorrower>({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    creditScore: {type: Number, default: 0},
    loanRequests: [{type: Schema.Types.ObjectId, ref: 'LoanRequest'}],
    totalLoansBorrowed: {type: Number, default: 0}
})

const Borrower = models.Borrower || model<IBorrower>('Borrower', BorrowerSchema);

export default Borrower;