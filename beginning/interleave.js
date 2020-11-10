'use strict'

const interleave = function (list1, list2) {
		
	let size = list1.length + list2.length;
	let list3 = new Array (size);
	let i = 0, j = 0;
	let k = 0;

	while (i < list1.length && i < list2.length) {
		list3[k++] = list1[i++];
		list3[k++] = list2[j++];
	}

	while (i < list1.length) {
		list3[k++] = list1[i++];
	}

	while (j < list2.length) {
		list3[k++] = list2[j++];
	}

	return list3;
}

const list = [1, 2, 3];
const l = [4, 5, 6, 7, 8];

console.log (interleave (list, l));
