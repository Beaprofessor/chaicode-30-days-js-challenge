//  Arrays


// Activity 1 : Array Creation and Access

// TASK 1
let arr = [1,2,3,4,5]
console.log(arr);

// TASK 2
// console.log(arr[0], arr[4])

 // Activity 2 : Array Methods (BASIC)

 // TASK 3
// arr.push(12)
// console.log(arr)

 // TASK 4 
// arr.pop()
// console.log(arr)

// TASK 5
arr.shift()
console.log(arr);

// TASK 6
arr.unshift(69)
console.log(arr);


// Activity 3:  ARRAY METHODS (intermediate)

// TASK 7 -> Maps
let newArr = [1,2,3,4,5]
let doubleArr = newArr.map(number => number * 2)
console.log(doubleArr)


// TASK 8 -> Filters

let evenArr = newArr.filter(number => number % 2 == 0)
console.log(evenArr)


// TASK - 9 -> Reduce

let sumOfArrElements = newArr.reduce((sum , num) => sum + num , 0)
console.log(sumOfArrElements)



// Activity 4 : Array Iteration

// TASK - 10 : For loop

let freshArr = [1,2,3,4,5]
for(let i = 1; i <= freshArr.length; i++){
    console.log(i)
}

// TASK - 11 : ForEach Loop

console.log("Here I am using the forEach Loop")
freshArr.forEach((num,index) => console.log(num,index));



// Activity - 5: Multi Dimensional Loops

// TASK 12 
let multiArr = [
    [11,22,33],
    [44,55,66]
]
console.log(multiArr)    // This will print all the arrays

// TASK 13 :: Specific element ko print karne ke liye kaam aata hai ye.
console.log(multiArr[1][2])   // Ye array of index 1 jo ki [44,55,66] hai uska  2nd index element ko print karega , jo ki 66 hai


