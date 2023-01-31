// type AddFn = ( a: number,  b: number ) => number;
interface AddFn {
  ( a: number, b: number ): number;
}
let add: AddFn;

add = ( n1: number, n2: number ) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;

}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name?: string;
  age = 26;

  constructor( n?: string ) {
    if( n ) {
      this.name = n;
    }
  }
  greet(phrase: string){
    if( this.name ) {
      console.log(phrase + ' ' + this.name);
    }else {
      console.log('HI!');

    }
  }
}
let user1: Greetable;

user1 = new Person();

user1.greet('Hi, There - I am');

console.log(user1)