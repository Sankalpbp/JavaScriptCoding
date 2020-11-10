'use strict'

const prompt = require ('prompt-sync')();

const n = prompt ('Enter the value of n: ');

const option = prompt ('Enter S for sum and P for product: ');

if (option === 'S') {
	let sum = 0;
	for (let i = 1; i <= n; ++i) {
		sum += i;
	}
	console.log (sum);
} else if (option === 'P') {
	let product = 1;
	for (let i = 1; i <= n; ++i) {
		product *= i;
	}
	console.log(product);
}

