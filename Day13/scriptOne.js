// Day 13 -> Modules

// Activity 1: Creating and Exporting Modules

// Task 1
// const addition = (a, b) => {
//   const adding = a+b ;
//   console.log(`${a} + ${b} => ` ,add);
//   return add;
// };
// module.exports = addition



// Task 2

// let person = {
//     name: "Lucky",
//     age: 22,
//     profession: "student",
// }

// module.exports = person




// Activity 2: Named and Default Exports

// Task 3

const hello=()=>{
    console.log("Hello Harry")
}

const aHello = (name) =>{
    console.log("Hello " + name)
}
module.exports = {hello , ahello} 


