import { Controller, Get, Body, Post, Res, HttpStatus, Logger, Delete, Param, Patch, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

@ApiUseTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post('create-user')
    async create(@Res() res, @Body() createUserDto: CreateUserDto): Promise<any> {
        try {
            const newUser = await this.userService.createUser(createUserDto);
            return res.status(HttpStatus.OK).json({ newUSer: newUser });
        } catch (error) {
            Logger.log(`Method not working`);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({});
        }
    }

    @Get('get-users')
    async getUsers(@Res() res: any) {
        try {
            const users = await this.userService.returnUsers();
            return res.status(HttpStatus.OK).json(users);
        } catch (error) {
            Logger.log(`Method not working`);
            return res.status(HttpStatus.BAD_REQUEST).json({});
        }
    }

    @Delete('delete/:id')
    async deleteUser(@Res() res: any, @Param('id') id: string) {
        try {
            await this.userService.deleteUser(id);
            return res.status(HttpStatus.OK).json({});
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({});
        }
    }

}
