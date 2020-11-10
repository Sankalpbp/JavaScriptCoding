'use strict'

const prompt = require ('prompt-sync') ();

const n = prompt ('Enter the size of the array: ');

let x;
let list = new Array (n);

for (let i = 0; i < n; ++i) {
	x = prompt ();
	list[i] = x;
}

console.log (list);

const k = prompt ('Enter the element to find in the array: ');

for (let i = 0; i < n; ++i) {
	if (list[i] === k) {
		console.log ('Found at ' + i);
		return;
	}
}

console.log ('The element ' + k + ' is not found!');
