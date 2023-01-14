## TypeScript-CodeCamp
Udemy: This course covers everything you need to know about TypeScript, including features like decorators and advanced types. By Insturctor Maximilian Schwarzmüller
---
# My journey with TypeScript is interesting.

#### 1. TypeScript's enumeration. 

```ts,
enum Role {ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Meyada',
  age: 26,
  hobbies: ['Sports', 'Coding'],
  role: Role.ADMIN
};

let favoriteAc: string[];
favoriteAc = ['Coding'];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
```
> This code makes use of TypeScript's enumeration feature to define a set of named constants (ADMIN, READ_ONLY, AUTHOR) that are used to set the value of the role property in the person object. This provides a more readable and maintainable way of setting and comparing the role, rather than using raw string or numeric values. Additionally, the code makes use of the for-of loop and the TypeScript's string array type to log the person's hobbies in uppercase.
---
#### 2. Union Aliases.
```ts,
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable, 
  input2: Combinable, 
  resultConversion: ConversionDescriptor
  ){
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number' ){
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(26, 40, 'as-number');
console.log(combineAges);

const combineStringAges = combine('26', '40', 'as-number');
console.log(combineStringAges);

const combineName = combine('Meya', 'Anne', 'as-text')
console.log(combineName);
```

> This TypeScript code defines a function ``combine`` that takes three arguments: ``input1`` and ``input2`` of type Combinable, which is a union type of ``number`` or ``string``, and ``resultConversion`` of type ``ConversionDescriptor``, which is a string literal type with two possible values: 'as-number' or 'as-text'.
The function checks the type of ``input1`` and ``input2`` and the value of ``resultConversion`` to determine how to combine the inputs. If both inputs are numbers or ``resultConversion`` is 'as-number', it performs mathematical addition on the inputs. Otherwise, it concatenates the inputs as strings.
The code also includes examples of how the function can be used with different inputs and conversion types.
