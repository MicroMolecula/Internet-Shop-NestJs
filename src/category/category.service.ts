import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Category } from './category.modele';
import { CreateCategoryDto } from './create-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category') private categories: Model<Category>,
    ) { }

    public async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        return await this.categories.create({ _id: Types.ObjectId(), ...createCategoryDto });
    }

    public async findAll(): Promise<Category[]> {
        return await this.categories.find();
    }

    public async deleteCategory(categoryId: string): Promise<void> {
       await this.categories.deleteOne({ _id: categoryId });
    }
}
