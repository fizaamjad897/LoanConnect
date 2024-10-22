import {models, model, Document, Schema} from 'mongoose';

enum riskRating {
    Low = 'LOW',
    Medium = 'MEDIUM',
    High = 'HIGH'
}

export interface IRiskAssessment extends Document {
    borrower: Schema.Types.ObjectId;
    creditScore: number;
    debtToRateRatio: number;
    riskRating: riskRating;
    recommendedInterestRate: number;
}

const RiskAssessmentSchema = new Schema<IRiskAssessment>({
    borrower: {type: Schema.Types.ObjectId, required: true, ref: 'Borrower'},
    creditScore: {type: Number, required: true, default: 0},
    debtToRateRatio: {type: Number, default: 1},
    riskRating: {type: String, enum: Object.values(riskRating), default: riskRating.Low},
    recommendedInterestRate: {type: Number, default: 0},
})

const RiskAssessment = models.RiskAssessment || model<IRiskAssessment>('RiskAssessment', RiskAssessmentSchema);

export default RiskAssessment;