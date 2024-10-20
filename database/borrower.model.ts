import {models, model, Document, Schema} from 'mongoose';

export interface IBorrower extends Document {
    name: string;
    email: string;
    creditScore: number;
    loanRequests: Schema.Types.ObjectId[];
    rating: number;
    totalLoansBorrowed: number;
}

const BorrowerSchema = new Schema<IBorrower>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    creditScore: {type: Number, default: 0},
    loanRequests: [{type: Schema.Types.ObjectId, ref: 'LoanRequest'}],
    rating: {type: Number, default: 0},
    totalLoansBorrowed: {type: Number, default: 0}
})

const Borrower = models.Borrower || model<IBorrower>('Borrower', BorrowerSchema);

export default Borrower;