interface Named {
  readonly name: string;

}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name: string;
  age = 26;

  constructor( n: string ) {
    this.name = n;
  }
  greet(phrase: string){
    console.log(phrase+ ' ' + this.name);
  
  }
}
let user1: Greetable;

user1 = new Person('Meya')

user1.greet('Hi, There - I am');

console.log(user1)