let input = null; // change value and check typeof
function checkTypeOf() {
	if (typeof input === "undefined" || input === "") {
		console.log(input);
		console.log("undefined");
	} else if (typeof input === "number") {
		console.log(input);
		console.log(typeof input);
	} else if (typeof input === "string") {
		console.log(input);
		console.log(typeof input);
	} else if (!isNaN(eval(input))) {
		const result = eval(input);
		console.log(result);
		console.log(`object который не совсем ${typeof input}`);
	}
}

checkTypeOf()