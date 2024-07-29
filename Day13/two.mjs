// Task 1 

import {add} from './one.mjs';
// import person from './one.mjs';


const num1 = 7;
const num2 = 3;
console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);



// TASK 2 

// console.log(person.greet());    // Output: Hello, my name is John Doe.
// console.log(person.getAge());   // Output: I am 30 years old.

// Modify properties using methods
// person.setName('Jane Smith');
// person.setAge(28);

// console.log(person.greet());    // Output: Hello, my name is Jane Smith.
// console.log(person.getAge());     // Output: I am 28 years old.



// Task 3

import { subtract, multiply, divide } from './one.mjs';

const numA = 10;
const numB = 5;

console.log(`Subtract: ${subtract(numA, numB)}`); 
console.log(`Multiply: ${multiply(numA, numB)}`); 
console.log(`Divide: ${divide(numA, numB)}`);



// Task 4

import greet from './one.mjs';

const name = 'Alice';
console.log(greet(name)); 


// Task 5

import * as one from './one.mjs';


console.log(`PI: ${one.PI}`);                 // Output: PI: 3.14159
console.log(`E: ${one.E}`);                   // Output: E: 2.71828
console.log(`Multiply: ${one.multiply1(num1, num2)}`); // Output: Multiply: 50
console.log(`Divide: ${one.divide1(num1, num2)}`); // Output: Divide: 2
