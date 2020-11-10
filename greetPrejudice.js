'use strict'

const prompt = require ('prompt-sync')();

const name = prompt ('What is your name? ');

if (name == 'Alice' || name == 'Bob') {
	console.log ('Welcome to the JavaScript world, ' + name);
} 
