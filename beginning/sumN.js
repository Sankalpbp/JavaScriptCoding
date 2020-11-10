'use strict'

const prompt = require ('prompt-sync') ();

const n = prompt ('Enter the value of n: ');

let sum = 0;

for (let i = 1; i <= n; ++i) {
	sum += i;
}

console.log (sum);
