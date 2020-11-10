'use strict'

const prompt = require ('prompt-sync') ();

const n = 1000;

const isPrime = function (n) {
		
	for (let i = 2; i <= Math.sqrt(n); ++i) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}

console.log (1 + ' is not prime');

for (let i = 1; i <= n; ++i) {
	if (isPrime (i) === true) {
		console.log (i + ' is prime');
	} else {
		console.log (i + ' is not prime');
	}
}
