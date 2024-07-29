// Task 1 

import {add} from './one.mjs';
import person from './one.mjs';


const num1 = 7;
const num2 = 3;
console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);



// TASK 2 

console.log(person.greet());    // Output: Hello, my name is John Doe.
console.log(person.getAge());   // Output: I am 30 years old.

// Modify properties using methods
person.setName('Jane Smith');
person.setAge(28);

console.log(person.greet());    // Output: Hello, my name is Jane Smith.
console.log(person.getAge());     // Output: I am 28 years old.



// Task 3

