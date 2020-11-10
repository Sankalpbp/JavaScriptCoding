'use strict'

const prompt = require ('prompt-sync')();

const n = prompt ('Enter the size of the list: ');

let x;

let list = [];

const print = function (list) {
		
	console.log ('\n\n');
	for (let i = 0; i < list.length; ++i) {
		process.stdout.write (list[i] + ' ');
	}
	console.log ('\n\n');
}

for (let i = 0; i < n; ++i) {
	x = prompt ('Enter the value: ');
	list.push (x);
}

console.log (list);		
