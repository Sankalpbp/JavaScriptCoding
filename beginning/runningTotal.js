'use strict'

const prompt = require ('prompt-sync') ({ sigint : true  });

const runningTotal = function (list) {
	let sum = 0;

	for (let i = 0; i < list.length; ++i) {
		sum += list[i];
	}

	return sum;
};

let x;
let list = [];

console.log ('Enter -1 to exit');

x = parseInt (prompt ());

while (x !== -1) {
	list.push(x);
	x = parseInt (prompt ());
}

console.log (runningTotal (list));
