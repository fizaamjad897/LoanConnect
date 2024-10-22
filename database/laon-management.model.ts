import {models, model, Document, Schema} from 'mongoose';

export interface ILoanManagement extends Document {
    loanRequest: Schema.Types.ObjectId;
    disbursementDate: Date;
    repaymentSchedule: Date[];
    amountRepaid: number,
    remainingBalance: number
}

const LoanManagementSchema = new Schema<ILoanManagement>({
    loanRequest: {type: Schema.Types.ObjectId, ref: 'LoanRequest'},
    disbursementDate: {type: Date, required: true},
    repaymentSchedule: [{type: Date, required: true}],
    amountRepaid: {type: Number, default: 0},
    remainingBalance: {type: Number, required: true}
})

const LoanManagement = models.LoanManagement || model<ILoanManagement>('LoanManagement', LoanManagementSchema);

export default LoanManagement;