# Section 4 - React State & Working With Events

## 49. Working with "State"

```js
import React, { useState } from "react"; // useState must be imported from the react library.

// useState must only be used inside a react functional component (so not in any nested functions, or outside the functional component).

// useState always returns an array of size 2. JavaScript destructuring is as follows:
const [title, setTitle] = useState("Salad"); // props.title is the initial value of `title`.

setTitle("lemon"); // `title`'s value will be set to 'lemon' after a while (NOT IMMEDIATELY).
console.log(title); // actually prints 'Salad' because setTitle doesn't work immediately. (It gets scheduled)
```

## 50. A Closer Look at the "useState" Hook

-   State works per component. Each component has their own state, i.e. their own title value.

## 56. Updating State That Depends On Previous State

```js
// Whenever you are setting the state where the new state depends on a previous state, PASS IN A FUNCTION.

// Example:
const [count, setCount] = useState(0);
setCount((previousSnapshotState) => {
	return previousSnapshotState + 1;
});

// Using this approach guarantees that you get the correct previous snapshot of the state because React does some finicky state scheduling stuff.
```

## 57. Handling Form Submission

-   If you have a form with a button of type submit, form will emit an event. (See form#onSubmit).

```html
<form>
    <button type="submit">
</form>
```

-   But by default, when you submit a form, it reloads the page and sends the form information to the server. This is not what we want. So:

```js
const submitHandler = (event) => {
	event.preventDefault(); // prevents default behavior
};
```

## 58. Two-Way Binding

-   Two-Way Binding is a way of binding the input jsx element with the state and handler function.
-   In this example, the `title` variable is always updated to the input's value.

```jsx
const [title, setTitle] = useState('');
<input type='text' value={title} onChange={(event) => {setTitle(event.target.value)}}>
```

## 61. Controlled vs. Uncontrolled Components & Stateless vs. Stateful Components.

-   Controlled components are components whose value is not controlled by the component itself, but rather by a parent component.
-   Uncontrolled components are the components we traditionally work with (where the data within the component is controlled by the component itself).
-   Stateless component -> display/dumb/presentational component (has no state)
-   Stateful component -> a component with state
