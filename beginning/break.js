'use strict'

const breakNumber = function (n) {
		
	let list = [];

	while (n > 0) {
		list.unshift (n % 10);
		// this step is important
		n = parseInt (n / 10);
	}

	return list;
}

const n = 12345;

console.log (breakNumber(n));
