// const names: Array<string> = [] // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Meya', hobbies: ['Sports'] }, {age: 26});
console.log(mergeObj);

interface Lengthy {
  length: number;

}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if(element.length === 1) {
    descriptionText = 'Got element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}
console.log(countAndDescribe(['Cooking', 'Sport']));

function  extracAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U 
){
  return 'Value: ' + obj[key];
}
extracAndConvert({ name: 'Meya' }, 'name')