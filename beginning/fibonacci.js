'use strict'

const fibonacci = function (n) {
		
	if (n === 1 || n === 2) {
		return 1;
	}

	return fibonacci (n - 1) + fibonacci (n - 2);
}

const n = 20;

for (let i = 1; i <= n; ++i) {
	console.log (fibonacci (i));
}
