'use strict'

const prompt = require ('prompt-sync') ({ sigint : true });

const isPalindrome = function (x) {
	
	let i = 0;
	let j = x.length - 1;

	while (i < j) {
		if (x.charAt (i) != x.charAt (j)) {
			return false;
		}

		++i;
		--j;
	}

	return true;
};


let string = prompt ('Enter the string: ');

// truthy value
if (isPalindrome (string)) {
	console.log ('Palindrome');
	return;
}

// falsy value
if (!isPalindrome (string)) {
	console.log ('Not a Palindrome');
}
