// Activity 1 : If - Else

// Task 1
let a = 100;
if (a > 0) {
  console.log("Positive");
} else if ((a = 0)) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// Task 2
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Activity 2 : Nested if else

// TASK 3
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 >= num2 && num1 >= num3) {
  console.log("Number 1 is the largest");
} else if (num2 >= num3 && num2 >= num1) {
  console.log("Number 2 is the largest");
} else {
  console.log("Number 3 is the largest");
}

// Activity 3 :  Switch Case

// Task 4
let week = 7;
switch (week) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
}

// Task 5
let grade = 90;
switch (grade) {
  case grade >= 90:
    console.log("Grade A");
    break;
  case grade >= 75:
    console.log("Grade B");
    break;
  case grade >= 60:
    console.log("Grade C");
    break;
  case grade >= 45:
    console.log("Grade D");
    break;
  case grade >= 30:
    console.log("Grade E");
    break;
  default:
    console.log("Bhaii FAIL ho aap");
    break;
}
// Activity 4 : Conditional (Ternary) Operator

// Task 6
let number = 22;
let checkNumberIs = number
  ? (number % 2 == 0, console.log("Even"))
  : (number % 2 != 0, console.log("Odd"));

// Activity 5 : Combining Conditions

// Task - 7

let year = 239;
if (year % 4 == 0 && year % 100 != 0) {
  console.log("Bhaii leap year hai ye");
} else if (year % 400 === 0) {
  console.log("Leap year hai ye");
} else {
  console.log("nahi hai leap year ye");
}
