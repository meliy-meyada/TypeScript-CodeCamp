const userName = 'Meya';
// userName = 'Meyada';
let age = 26

age = 25

// function add (a: number, b: number){
//   let result;
//   result = a + b;
//   return result;
// }
// if (age > 20){
//   let isOld = true;
// }
// console.log(isOld);
// const add = (a: number, b: number = 1) =>  a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }
// printOutput(add(5)); 

const hobbies = ['coding', 'cooking'];
const activeHobbies = ['dive']

activeHobbies.push( ...hobbies );



const person = {
  name: 'meya',
  age: 25
};

const coppiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
}

const addNumbers = add(5, 10, 2, 3.7);
console.log(addNumbers);