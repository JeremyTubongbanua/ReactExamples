# Practice useContext

This section is for using the useContext and Providers

## Project Setup (from scratch)

1. `mkdir practice-useContext` (make root folder)
2. `mkdir public` (make public folder)
3. `mkdir src` (make src folder)
4. `npm init` then spam `<Enter>`. (make package.json)
5. `npm i react react-dom react-scripts` (install react libraries)
6. Create `public/index.html`, setup html document with boiler-plate and be sure to add the `<div id="root"></div>` to the body.
7. Create `src/index.js` with the following start code (where `App` is the root component):

```js
import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));
```

8. Go to `package.json` and add `"start": "react-scripts start"` to the scripts.
9. `npm start` then press `<Enter>` to auto-setup things in `package.json` for running react project.
