// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Meyada',
  age: 26,
  hobbies: ['Sports', 'Coding']
};
let favoriteAc: string[];
favoriteAc = ['Coding'];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); !!ERROR!!
}
