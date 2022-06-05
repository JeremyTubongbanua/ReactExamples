# Section 14 - Sending Http Requests (e.g. Connecting to a Database)

Notes:

-   It is not good to connect directly to a database in your JavaScript code (the browser people can see it!).
-   Use a REST API to interact with a database.
-   The `axios` package is something you can use, or `fetch` which is built into JavaScript.
    `fetch()` JavaScript example:

```js
const fetchMoviesHandler = () => {
	fetch("https://swapi.dev/api/people/1")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.results;
		})
		.catch((err) => console.log(err));
};
```

With async/await:

```js
const fetchMoviesHandler = async () => {
	try {
		const response = await fetch("https://swapi.dev/api/people/1");
		const data = await response.json();
	} catch (err) {
		console.log(err);
	}
};
```

- When using useEffect, you put any dependencies in the []. This includes any functions that you may use (the function may be using some state inside the function!).
