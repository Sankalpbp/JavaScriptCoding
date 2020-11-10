'use strict'

const square = function (list) {
	
	for (let i = 0; i < list.length; ++i) {
		list[i] *= list[i];
	}

	return list;
}

const list = [1, 2, 3, 12];

console.log (square (list));
