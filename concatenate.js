'use strict'

const concatenate = function (list1, list2) {
		
	for (let i = 0; i < list2.length; ++i) {
		list1.push(list2[i]);
	}

	return list1;
}

const l1 = [1, 2, 3];
const l2 = [4, 5, 6];

console.log (concatenate (l1, l2));
