import { Types, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    name: String,
});

export interface Category extends Document {
    _id: Types.ObjectId;
    name: string;
}
