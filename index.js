// first symbol variable
const ID_SYMBOL = Symbol("id");

// using symbol in object's properties
const person = {
	id: 0,
	name: "frank mark",
	age: 18,
	[ID_SYMBOL]: 1000
}
// some use to symbol
const RUN = Symbol.for("run");

function letItRun(run) {
	if (run === RUN) {
		console.log("it works");
	} else {
		console.log("it doesn't");
	}
}
// it won't work
letItRun("run");
// it will work because Symbol.for("run") is identical to RUN
letItRun(Symbol.for("run"))
// but if i do this 
// Symbol("run") === Symbol("run") --> false

console.log(person[ID_SYMBOL])

// object
const people = {
	frankMark: {
		name: "frank mark",
		age: 18
	},
	luseMark: {
		name: "luse Mark",
		age: 15
	},
	petterLand: {
		name: "petter Land",
		age: 20
	}
}

const peopleKeys = Object.keys(people);
const list = peopleKeys.map(key => console.log(people[key].name, people[key].age))