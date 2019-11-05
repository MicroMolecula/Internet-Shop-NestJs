import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserInterface } from './user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    private saltRounds = 10;

    constructor(
        @InjectModel('User') private users: Model<UserInterface>,
    ) { }

    public async createUser(createUserDto: CreateUserDto): Promise<UserInterface> {
        createUserDto.password = await this.getHash(createUserDto.password);
        return await this.users.create({ _id: Types.ObjectId(), ...createUserDto });
    }

    public async returnUsers(): Promise<UserInterface[]> {
        return await this.users.find();
    }

    public async findUserById(userId: string) {
        return await this.users.findById(userId);
    }

    public async deleteUser(useId: string): Promise<void> {
        await this.users.deleteOne({ _id: useId });
    }

    async getUserByName(name: string): Promise<UserInterface> {
        return (await this.users.find({ name }))[0];
    }

    async getHash(password: string | undefined): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

}
