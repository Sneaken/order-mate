import { Test, TestingModule } from '@nestjs/testing';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';

describe('DishesController', () => {
  let dishesController: DishesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DishesController],
      providers: [DishesService],
    }).compile();

    dishesController = app.get<DishesController>(DishesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dishesController.getHello()).toBe('Hello World!');
    });
  });
});
