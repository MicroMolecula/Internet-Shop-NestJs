import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';


@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'bruh',
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [AuthService],
  controllers: [UserModule],
  exports: [],

})
export class AuthModule { }
