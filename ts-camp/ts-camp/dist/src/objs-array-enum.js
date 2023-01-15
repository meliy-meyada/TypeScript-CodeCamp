"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Meyada',
//   age: 26,
//   hobbies: ['Sports', 'Coding'],
//   role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1; 
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Meyada',
    age: 26,
    hobbies: ['Sports', 'Coding'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']; 
let favoriteAc;
favoriteAc = ['Coding'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!ERROR!!
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
