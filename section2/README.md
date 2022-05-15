# Section 2 - JavaScript Refresher

## 11. Module Introduction

This section goes over next generation JavaScript (ES6 == ES2015)

## 12. Understanding "let" and "const"

ES6 introduced `let` and `const`. `var` is obsolete.

```js
// old JavaScript way
var lemon = "Hello World!";
```

```js
// new JavaScript way (ES6/ES2015)
let cappuccino = "Hello World!!!"; // new recommended ES6 way
const salad = "Yummy!!"; // reference variable `salad` cannot be re-referenced.
```

## 13. Arrow Functions

ES6 introduced arrow functions.

```js
// old JavaScript way
function lemon1() {
	console.log("Dog");
}
lemon1(); // Dog
```

```js
// Arrow Function (introduced in ES6)
// here, lemon is a variable pointing to what would be an anonymous function in dart.
const lemon2 = () => {
	console.log("Salad");
};
lemon2(); // Salad
```

## 14. Exports and Imports

ES6 introduced exports and imports. You can export/import pretty much anything (classes, objects, variables, functions,...).

1. Default export

```js
// Exporting example:
class Lemon {
	// ...
}
export default Lemon;
```

```js
// Importing example:
import Lemon as lemon from './lemon.js';
```

2. Exporting multiple

```js
// filename: test.js
const myFunction = (someNumber) => {
	console.log("Test " + someNumber);
};
const myConst = 3;
let lemonade = "Lemonade";

export { myFunction, myConst, lemonade };
```

```js
import { myFunction as func, myConst } from "./test.js";
func(myConst);
```

## 16. Classes, Properties, and Methods

-   Class have properties (the variables) and methods (the functions)

```js
// filename: 15_test.js
// Old way
class Human {
	constructor() {
		this.gender = "Male";
	}

	printGender() {
		console.log(this.gender);
	}
}

const human = new Human();
human.printGender(); // Male
```

```js
// filename: 15_test2.js
// New way
class Human {
	gender = "Male";

	printGender = () => {
		console.log(this.gender);
	};
}

const human = new Human();
human.printGender(); // Male
```

## 17. Spread & Rest Operator

```js
// filename: 17_test.js
// spread operator example

// arrays
const oldArray = [3, 4, 5];
const newArray = [1, 2, ...oldArray];
console.log(newArray); // [ 1, 2, 3, 4, 5 ]

// objects
const oldObject = { name: "Jeremy", age: 19 };
const newObject = { ...oldObject, color: "purple" };
console.log(newObject); // { name: 'Jeremy', age: 19, color: 'purple' }
```

```js
// rest operator
const lemon = (...args) => {
	console.log(args[0]); // 3
	console.log(args.length); // 4
	console.log(args); // [ 3, 4, 5, 'transformer' ]
};

lemon(3, 4, 5, "transformer");
```

## 18. Destructuring

ES6 introduced an easy way to extract array elements and object properties and store them in individual variables.

```js
// 18_test.js
const [a, b] = ["Hello", "World"];
const [n1, , n3] = [1, 2, 3];
const {lemon} = {lemon: 2, age: 19};

console.log(a); // Hello 
console.log(b); // World
console.log(n1); // 1
console.log(n3); // 3
console.log(lemon); // 2
```
