// ES6+ Features

// Activity 1 : Template Literals

// Task 1
let name = "Coder"
let age = 22

console.log(`${name} age is ${age}`)

// Task 2
// const title = "JavaScript Essentials";
// const author = "John Doe";
// const year = "2024";

// const multiLineString = `
//   Book Title: ${title}
//   Author: ${author}
//   Year: ${year}
// `;

// console.log(multiLineString);



// Activity 2 : Destructuring

// Task 3
const arr = [1,2,3,4]
const [a,b,c,d] = arr
console.log(`a:${a} , b:${b} , c:${c}, d:${d}`)

// Task 4
let book = {
    title: "ES6+ Features",
    author:"Hitesh bhaiya",
    year: 2024
}

let { title, author , year} = book
console.log(title , author , year )


// Activity 3: Spread and Rest Operators


// Task 5

const oldArr = [1,2,3,4]
const newArr = [...oldArr , 11,22,33]   // this is the spread operator which copies all the elements from previous array.
console.log(newArr)



// Task 6 
const numbers = [1,2,3,4]
function sum(...numbers){
    return numbers.reduce((prev,curr)=> prev+curr , 0)
}
console.log(sum(...numbers))
console.log(sum(1,2,3))



// Activity 4 : Default Parameters

// Task 7 
function product(a,b=2){
    return a*b
}
console.log(product(8))
console.log(product(8,1))



// Activity 5 : Enhanced Object Literals 

// Task 8 
const name1 = "Harry"
const age1 = 22

const personDetails = {
    name1,
    age1,
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age1} years old `
    }, 
}

console.log(personDetails)
console.log(personDetails.greet())


// Task 9 
const key1 = "firstName"
const key2 = "secondName"

const firstNameValue = "Lucky"
const secondNameValue = "The Racer"


const obj = {
    [key1] : firstNameValue,
    [key2] : secondNameValue,
}

console.log(obj)