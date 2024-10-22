import {models, model, Document, Schema} from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    rating: number;
}

const UserSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    rating: {type: Number, default: 0},
})

const User = models.User || model<IUser>('User', UserSchema);

export default User;