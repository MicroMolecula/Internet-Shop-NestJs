import { CategoryService } from './category.service';
import { CreateCategoryDto } from './create-category.dto';
import { Controller, Post, Req, Res, Body, Get, Delete, Param, Patch, HttpStatus, Logger } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiUseTags('Category')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
  ) { }

  @Post('create-category')
  async create(@Res() res, @Body() cateforyData: CreateCategoryDto): Promise<any> {
    try {
      const newCategory = await this.categoryService.createCategory(cateforyData);
      return res.status(HttpStatus.OK).json({ newCategory: newCategory });
    } catch (error) {
      Logger.log(`Method not working`);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({});
    }
  }

  @Get('get-categories')
  async getall(@Res() res: Response) {
    try {
      const responseData = await this.categoryService.findAll();
      res.status(200).json(responseData);
    } catch (error) {
      Logger.log(`Method not working`);
      return res.status(HttpStatus.BAD_REQUEST).json({});
    }

  }

  @Delete('delet/:id')
  async deleteCategory(@Res() res: any, @Param('id') id: string) {
    try {
      await this.categoryService.deleteCategory(id);
      return res.status(HttpStatus.OK).json({});
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({});
    }
  }

}
