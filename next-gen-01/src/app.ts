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
const add = (a: number, b: number) =>  a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}
printOutput(add(5, 2)); 
