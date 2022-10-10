let cart = [];

let product = {
	id: Math.random(),
	name: String,
	price: Number,
	amount: Number,
	sum: Number,
	category: String,
}

function addToCart(
name = prompt('Введите имя товара'), 
price = prompt('Введите цену товара'), 
amount = prompt('Введите количетсво товара'), 
category = prompt('Введите категорию товара')
) 

{
	for (key in product) {
		product.name = name;
		product.price = price;
		product.category = category;
		product.amount = amount;
		product.sum = price * amount;
	}
	
}

addToCart()

    cart.push(product)
	console.log(cart)