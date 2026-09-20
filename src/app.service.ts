import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

@Injectable()
export class AppService {
  private readonly products: Product[] = [
    { id: 1, name: 'Mechanical Keyboard', category: 'electronics', price: 89 },
    { id: 2, name: 'Desk Lamp', category: 'home', price: 35 },
    { id: 3, name: 'Wireless Mouse', category: 'electronics', price: 29 },
    { id: 4, name: 'Notebook', category: 'stationery', price: 8 },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  filterProducts(category?: string): Product[] {
    if (!category) {
      return this.products;
    }

    return this.products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase(),
    );
  }
}
