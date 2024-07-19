// Activity 1 : For Loop

// TASK 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// TASK 2
let a = 5;
for (let i = 1; i <= 10; i++) {
  console.log(a, "X", i, "=", a * i);
}

// Activity 2 : While Loop

// TASK 3
let num = 1;
let sum = 0;
while (num <= 10) {
  //   let sum = 0;
  sum += num;
  num++;
  console.log(sum);
}
// TASK 4
let n = 10;
while (n > 1) {
  console.log(n);
  n--;
}

// Activity 3 : Do - While Loop

// TASK 5
console.log("Do while");
let b = 1;
do {
  console.log(b);
  b++;
} while (b <= 5);

// TASK 6
let factorialNumber = 10;
let prod = 1;
let i = 1;
do {
  prod = factorialNumber * prod;
  factorialNumber--;
} while (factorialNumber > 1);
console.log(prod);

// Activity 4 : Nested Loop

// TASK 7
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Activity 5 : Loop Control Statements

// TASK 8
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;

  console.log(i);
}

// TASK 9
for (let i = 1; i <= 10; i++) {
  if(i==7){
    break
  }
  console.log(i)
}
