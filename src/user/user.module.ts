import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.shcema';
import { AuthService } from '../auth/auth.service';
import { AuthController } from '../auth/auth.controller';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'User',
        schema: UserSchema,
    }])],
    providers: [
        UserService,
    ],
    controllers: [
        UserController,
    ],
    exports: [
        UserService,
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    ],

})
export class UserModule { }
