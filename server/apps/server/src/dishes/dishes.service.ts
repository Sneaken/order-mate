import { Injectable } from '@nestjs/common';
import { Dish } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateDishDto, UpdateDishDto } from './dishes.dto';

@Injectable()
export class DishesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Dish[]> {
    return this.prisma.dish.findMany();
  }

  async findOne(id: number): Promise<Dish> {
    return this.prisma.dish.findUnique({ where: { id: id } });
  }

  async create(data: CreateDishDto): Promise<Dish> {
    return this.prisma.dish.create({ data });
  }

  async update(id: number, data: UpdateDishDto): Promise<Dish> {
    return this.prisma.dish.update({ where: { id: id }, data });
  }

  async delete(id: number): Promise<Dish> {
    return this.prisma.dish.delete({ where: { id: id } });
  }
}
