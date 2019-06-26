// first symbol variable
const idSymbol = Symbol("id");

// using symbol in object's properties
const person = {
	id: 0,
	name: "frank mark",
	age: 18,
	[idSymbol]: 1000
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