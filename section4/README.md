# Section 4

## 49. Working with "State"

```js
import React, { useState } from "react"; // useState must be imported from the react library.

// useState must only be used inside a react functional component (so not in any nested functions, or outside the functional component).

// useState always returns an array of size 2. JavaScript destructuring is as follows:
const [title, setTitle] = useState('Salad'); // props.title is the initial value of `title`.

setTitle('lemon') // `title`'s value will be set to 'lemon' after a while (NOT IMMEDIATELY).
console.log(title) // actually prints 'Salad' because setTitle doesn't work immediately. (It gets scheduled)
```

## 50. A Closer Look at the "useState" Hook

- State works per component. Each component has their own state, i.e. their own title value. 