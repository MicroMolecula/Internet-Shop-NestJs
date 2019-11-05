import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    userCommonData: {
        type: Schema.Types.ObjectId,
    },
    name: String,
    email: String,
    password: String,
})
