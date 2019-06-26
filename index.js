// first symbol variable
const idSymbol = Symbol("id");

// using symbol in object's properties
const person = {
	id: 0,
	name: "frank mark",
	age: 18,
	[idSymbol]: 1000
}