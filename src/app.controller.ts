import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('products/filter')
  filterProducts(@Query('category') category?: string) {
    return this.appService.filterProducts(category);
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return this.appService.getProduct(Number(id));
  }
}
