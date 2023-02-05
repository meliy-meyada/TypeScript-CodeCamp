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

class DataStorage<T extends string | number | boolean > {
  private data: T[] = [];

  addItem(item: T){
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1){
      return;
    }
    this.data.splice(this.data.indexOf(item), 1) // -1
  }

  getItem() {
    return [...this.data];
  }

}

const textStorage = new DataStorage<string>();
textStorage.addItem('Meya');
textStorage.addItem('Malee');
textStorage.removeItem('Meya');
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const meyaObj = { name: 'Meya' };
// objStorage.addItem(meyaObj);
// objStorage.addItem({ name: 'Malee' });
// // ...
// objStorage.removeItem(meyaObj);
// console.log(objStorage.getItem());


interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
} 

function createCourseGoal (
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Meya', 'Malee'];
// names.push('Malee');
// names.pop();