

let person = {name: 'Jeremy', age: 19};
let person2 = person;

// before change
console.log(person); // { name: 'Jeremy', age: 19 }
console.log(person2); // { name: 'Jeremy', age: 19 }

// changes
person.name = 'Alyssa';

// after change
console.log(person); // { name: 'Alyssa', age: 19 }
console.log(person2); // { name: 'Alyssa', age: 19 }