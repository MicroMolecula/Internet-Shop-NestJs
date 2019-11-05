import { IsInt, IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    @ApiModelProperty({ required: true })
    readonly name: string;
}
