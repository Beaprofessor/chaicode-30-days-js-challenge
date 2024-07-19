// Activity 1

// Task 1
let num = 22;
function checkNumber() {
  if (num % 2 == 0) {
    console.log("Even hai ji");
  } else {
    console.log("Odd hai ji");
  }
}
checkNumber();

// Task 2

function square() {
  let n = 2;
  let res = n * n;
  return res;
}
let results = square();
console.log(results);

// Activity 2 : Function Expression

// Task 3

const checkMaxNumber = function checkMax(a, b) {
  if (a > b) {
    console.log("this is the max number");
    return a;
  } else {
    console.log("this is the max number");
    return b;
  }
};

console.log(checkMaxNumber(15, 10));

// Task 4
const addTwoString = function (str1, str2) {
  let str3 = str1 + str2;
  return str3
};
console.log(addTwoString("Haa Bahii!!!" , "Sahi hai Pencho"))

// Activity 3 : Arrow Functions

// Task 5
const sumOfTwoNum = (a,b) => {
    return a+b
}
console.log(sumOfTwoNum(22,1))

// Task 6
const containsChar = (str,char) =>{
    return str.includes(char)
}
console.log(containsChar("Harr", "c"))

// Activity 4 Function Parameters and Default Values

// Task 7
const productOfTwoNum = (g,f=2) => {
    return g * f
}
console.log(productOfTwoNum(3)) 

// Task 8
const personDetails = (name,age) => {
    return {
        name: name,
        age: age,
    }
}
console.log(personDetails("Name is Harry" , "Age is 22"))

// Activity 5 : Higher Order Functions

// Task 9
const repeatFunc = (func, times) => {
    for(let i = 0 ; i < times ; i++){
        func()
    }
}
const printMessage = () => {
    console.log("Hello Harry Bhai")
}

repeatFunc(printMessage , 10)

// Task 10

const compose = (func1, func2) => (value) => func2(func1(value));

const increment = (x) => x + 1;
const square = (x) => x * x;

const incrementAndSquare = compose(increment, square);

console.log(incrementAndSquare(3)); 