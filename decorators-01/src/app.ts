function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor)
  };
}

function WithTemplate(template: string, hookId: string){
console.log('LOGGER FACTORY')
  return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering Template');
        const hookEl = document.getElementById(hookId);
        if(hookEl){
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }

    }
  }
}

// @Logger('LOGGING -PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Meya';

  constructor() {
    console.log('Create person object...');
  }
}

const pers = new Person();
console.log(pers)

// ---
function Log(target: any, propertyName: string | Symbol ) {
  console.log('Property Decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3 (target: any, name: string | Symbol, descriptor: PropertyDescriptor){
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
console.log('Parameter  decorator!');
console.log(target);
console.log(name);
console.log(position);
}


class Product {
  @Log
  title: string;
  private _price: number;
  
  @Log2
  set price(val: number){
    if(val > 0){
      this._price = val;
    }else {
      throw new Error('Invalid price - should be positive!');
    }
  }
  constructor(t: string, p: number){
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number){
    return this._price * (1 + tax);
  }
}
const p1 = new Product('Book', 190);
const p2 = new Product('Book 2', 290);


function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,

    get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
    }
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);

  }
}

const p = new Printer();
p.showMessage();

const button  = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);