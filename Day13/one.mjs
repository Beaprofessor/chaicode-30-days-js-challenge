// Day - 13

// Activity 1: Creating and Exporting Modules

// TASK 1

export function add(a, b) {
    return a + b;
}


// Task 2 
const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}.`;
    },
    getAge() {
        return `I am ${this.age} years old.`;
    },
    setName(newName) {
        this.name = newName;
    },
    setAge(newAge) {
        this.age = newAge;
    }
};

// export default person;


//  Activity 2: Named and Default Exports.

//  Task 3


export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}


export function divide(a, b) {
    if (b === 0) {
        console.log('Division by zero is not allowed.');
    }
    return a / b;
}



// Task 4

export default function greet(name) {
    return `Hello, ${name}!`;
}



// Activity 3: Importing Entire Modules

// Task 5


// Constants
export const PI = 3.14159;
export const E = 2.71828;

// Functions

export function multiply1(a, b) {
    return a + b;
}

export function divide1(a, b) {
    if (b === 0) {
        console.log('Division by zero is not allowed.');
    }
    return a / b;
}



// Activity 4: Using third party Modules

// Task 6

// Import lodash
import _ from 'lodash'

// Example: Using the _.chunk function to split an array into chunks of a specified size
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray = _.chunk(array, 4);

console.log(chunkedArray);



// Task 7 

// Import Axios
import axios from 'axios';

// Function to make a GET request to a public API
const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the function
fetchData();



// Activity 5: Module Bundling (Optional)

// Task 8

