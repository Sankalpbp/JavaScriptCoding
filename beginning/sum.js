'use strict'

const sumFor = function (list) {
		
	let sum = 0;

	for (let i = 0; i < list.length; ++i) {
		sum += list[i];
	}

	return sum;
}

const sumWhile = function (list) {
		
	let sum = 0;
	let i = 0;

	while (i < list.length) {
		sum += list[i];
		++i;
	}

	return sum;
}

const sumRecurse = function (list) {
		
	if (list.length === 0) {
		return 0;
	}

	let smallOutput = sumRecurse (list.slice (1, list.length));

	return list[0] + smallOutput;
}

const list = [1, 2, 3, 4];

console.log (sumFor (list));
console.log (sumWhile (list));
console.log (sumRecurse (list));
