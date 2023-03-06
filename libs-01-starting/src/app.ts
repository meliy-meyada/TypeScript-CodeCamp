import { Product } from './product.model';
import { plainToClass } from 'class-transformer'; 

import "reflect-metadata";

const products = [
  {title: 'A Carpet', price: 250.50},
  {title: 'A Book', price: 249.50}
];

// const p1 = new Product('A Book', 290.50);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts){
  console.log(prod.getInformation());

}
