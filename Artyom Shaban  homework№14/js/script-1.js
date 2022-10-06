let num = [22, 15, 50, 100, 47, 89, 30, 99, 230, 3, 547, 500, 310, 200, 769, 950, 435, 307, 5000,10500, 2065,];

function max() {
	for (let i = 0; i < num.length; i++) {
		if (num[0] < num[i]) {
			num[0] = num[i]
		}
	}
	return console.log(num[0])
}

max()

let num1  = [22, 15, 50, 100, 47, 89, 30, 99, 230, 3, 547, 500, 310, 200, 769, 950, 435, 307, 5000,10500, 2065,];

function min() {
	for (let i = 0; i < num.length; i++) {
		if (num[0] > num[i]) {
			num[0] = num[i]
		}
	}
	return console.log(num[0])
}

min()