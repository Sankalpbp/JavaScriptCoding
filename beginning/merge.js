'use strict'

const merge = function (list1, list2) {
		
	let list3 = [];
	let i = 0;
	let j = 0;

	while (i < list1.length && j < list2.length) {
			
		if (list1[i] > list2[j]) {
			list3.push (list2[j]);
			++j;
		} else {
			list3.push (list1[i]);	
			++i;
		}
	}

	while (i < list1.length) {
		list3.push(list1[i++]);
	}

	while (j < list2.length) {
		list3.push (list2[j++]);
	}

	return list3;
}
		
const l1 = [1, 4, 7];
const l2 = [2, 5, 6];

console.log (merge (l1, l2));
