import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    @ApiModelProperty({ required: true })
    readonly name: string;

    @IsNotEmpty()
    @IsOptional()
    @IsString()
    @IsEmail()
    @ApiModelProperty({ required: true })
    readonly email: string;

    @IsNotEmpty()
    @IsOptional()
    @IsString()
    @ApiModelProperty({ required: true })
     password: string;
}
