'use strict'

// function expression with anonymous function
const reverse = function (list) {
		
	let i = 0;
	let j = list.length - 1;

	while (i < j) {
		let temp = list[i];
		list[i] = list[j];
		list[j] = temp;

		i += 1;
		j -= 1;
	}

	return list;
};

const prompt = require ('prompt-sync') ();

const n = prompt ('Enter the size of array: ');

let x;
let list = [];

for (let i = 0; i < n; ++i) {
	x = prompt ();
	list.push (x);
}

let newList = reverse (list);
console.log (newList);
