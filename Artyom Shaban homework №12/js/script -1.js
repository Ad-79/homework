function conversely (n) {
	n = n + "";
	return console.log(n.split("").reverse().join(""));
}

conversely (12345);