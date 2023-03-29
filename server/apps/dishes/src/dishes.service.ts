import { Injectable } from '@nestjs/common';

@Injectable()
export class DishesService {
  getHello(): string {
    return 'Hello World!';
  }
}
