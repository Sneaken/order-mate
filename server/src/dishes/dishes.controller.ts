import { Dish } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDishDto, UpdateDishDto } from './dishes.dto';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  async findAll(): Promise<Dish[]> {
    return this.dishesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dish> {
    return this.dishesService.findOne(parseInt(id));
  }

  @Post()
  async create(@Body() createDishDto: CreateDishDto): Promise<Dish> {
    return this.dishesService.create(createDishDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDishDto: UpdateDishDto,
  ): Promise<Dish> {
    return this.dishesService.update(parseInt(id), updateDishDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Dish> {
    return this.dishesService.delete(parseInt(id));
  }
}
