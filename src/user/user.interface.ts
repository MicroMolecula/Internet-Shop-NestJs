import { Document, Types } from 'mongoose';

export interface UserInterface extends Document {
    readonly _id: Types.ObjectId;
    readonly name: String;
    readonly email: string;
    readonly password: String;
}
