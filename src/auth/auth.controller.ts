import { Controller, Post, HttpStatus, Res, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
// import * as jwt from 'jsonwebtoken';
// import { CreateUserDto } from 'src/user/create-user.dto';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) { }

    @Post('auth/login')
    async login(@Req() req) {
        return this.authService.login(req.user);
    }

}
