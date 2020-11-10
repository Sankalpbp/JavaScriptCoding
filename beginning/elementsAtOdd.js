'use strict'

const prompt = require ('prompt-sync') ();

const oddPositions = function (list) {
		
	let odd = [];
	for (let i = 0; i < list.length; ++i) {
		if (i % 2 !== 0) {
			odd.push (list[i]);
		}
	}

	return odd;
}

const n = prompt ('Enter the size of the array: ');

let x;
let list = new Array (n);

for (let i = 0; i < n; ++i) {
	x = prompt ();	
	list[i] = x;
}

console.log (list);
const output = oddPositions (list);
console.log (output);
