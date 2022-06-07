# Section 15 - Building Custom React Hooks

## 186. Module Introduction

-   Hooks must be used inside the functional component block (no nested blocks with the exception of them being used in other hooks).

## 189. Using Custom Hooks

-   Made `use-counter.js` which uses `useState` and `useEffect` inside the hook.
-   Using `useCounter()` (our custom hook) inside of a functional component will make the hooks, `useState` and `useEffect`, binded to the functional component that uses `useCounter()`..

ForwardCounter.js (functional component):

```js
import { useCounter } from "../hooks/use-counter";

const ForwardCounter = () => {
	const counter = useCounter();
	return <Card>{counter}</Card>;
};
```

use-counter.js (custom hook):

```js
import { useState, useEffect } from "react";

const useCounter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return counter;
};

export { useCounter };
```
