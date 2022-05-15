// arrays
const oldArray = [3, 4, 5];
const newArray = [1, 2, ...oldArray];
console.log(newArray); // [ 1, 2, 3, 4, 5 ]

// objects
const oldObject = { name: 'Jeremy', age: 19 };
const newObject = { ...oldObject, color: 'purple' };
console.log(newObject); // { name: 'Jeremy', age: 19, color: 'purple' }