function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor)
}

@Logger
class Person {
  name = 'Meya';
  
  constructor() {
    console.log('Create person object...');
  }
}

const pers = new Person();
