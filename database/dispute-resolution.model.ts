import {models, model, Document, Schema} from 'mongoose';

export interface IDisputeResolution extends Document {
    loanRequest: Schema.Types.ObjectId;
    borrower: Schema.Types.ObjectId;
    lender: Schema.Types.ObjectId;
    disputeDetails: string,
    status: string,
    resolutionDate: Date
}

const DisputeResolutionSchema = new Schema<IDisputeResolution>({
    loanRequest: {type: Schema.Types.ObjectId, ref: 'LoanRequest'},
    borrower: {type: Schema.Types.ObjectId, ref: 'Borrower'},
    lender: {type: Schema.Types.ObjectId, ref: 'Lender'},
    disputeDetails: {type: String, required: true},
    status: {type: String, required: true},
    resolutionDate: {type: Date, default: Date.now}
})

const DisputeResolution = models.DisputeResolution || model<IDisputeResolution>('DisputeResolution', DisputeResolutionSchema);

export default DisputeResolution;