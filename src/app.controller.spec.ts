import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('products', () => {
    it('should return products filtered by category', () => {
      expect(appController.filterProducts('electronics')).toEqual([
        {
          id: 1,
          name: 'Mechanical Keyboard',
          category: 'electronics',
          price: 89,
        },
        { id: 3, name: 'Wireless Mouse', category: 'electronics', price: 29 },
      ]);
    });

    it('should return a product by id', () => {
      expect(appController.getProduct('2')).toEqual({
        id: 2,
        name: 'Desk Lamp',
        category: 'home',
        price: 35,
      });
    });
  });
});
