import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('productss')
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('productss/filter')
  filterProducts(@Query('category') category?: string) {
    return this.appService.filterProducts(category);
  }

  @Get('productss/:id')
  getProduct(@Param('id') id: string) {
    return this.appService.getProduct(Number(id));
  }
}
