import { Product } from './product.model';
import { plainToClass } from 'class-transformer'; 
import { validate } from 'class-validator';

import "reflect-metadata";

const products = [
  {title: 'A Carpet', price: 250.50},
  {title: 'A Book', price: 249.50}
];

const newProd = new Product('', -5.99);
validate( newProd ).then(errors => {
  if(errors.length > 0) {
  console.log('VALIDAATION ERRORS!'); 
  console.log(errors);
} else {
  console.log(newProd.getInformation());
  }
});

// const p1 = new Product('A Book', 290.50);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts){
  console.log(prod.getInformation());

}
