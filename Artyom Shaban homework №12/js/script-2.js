function myFunc() {
	console.log(arguments.callee.name);
}

myFunc();