'use strict'

const prompt = require ('prompt-sync')();

const n = 12;

for (let i = 1; i <= 12; ++i) {
	for (let j = 1; j <= 10; ++j) {
		console.log (i + ' x ' + j + ' = ' + i * j);
	}
	console.log ('\n\n');
}
