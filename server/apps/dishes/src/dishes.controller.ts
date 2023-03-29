import { Controller, Get } from '@nestjs/common';
import { DishesService } from './dishes.service';

@Controller()
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  getHello(): string {
    return this.dishesService.getHello();
  }
}
