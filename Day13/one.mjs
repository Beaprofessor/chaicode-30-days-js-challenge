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

export default person;


//  Activity 2: Named and Default Exports.

//  Task 3
