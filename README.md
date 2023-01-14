# TypeScript-CodeCamp
Udemy: This course covers everything you need to know about TypeScript, including features like decorators and advanced types. By Insturctor Maximilian Schwarzmüller
---
## My Intersting of TypeScript

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
