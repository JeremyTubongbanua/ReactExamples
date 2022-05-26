# Section 5 - Rendering Lists & Conditional Content

## 66. Understanding "Keys"

Every component has the `key` attribute. For mapping components, key attribute should be assigned a unique id. Keys are used to avoid going through every component generated in the array and instead makes a whole new instance and appends it to the screen. Using keys helps increase performance and decrease chances for bugs. Always add a key when mapping a list of items.

## 67. Outputting Conditional Content

You can output content or not content based on a boolean using `&&`.

```js
{
	filteredContent.length === 0 && <p>No content!</p>;
}
```
