// Error Handling

// Activity 1 : Basic Error Handling with Try-Catch

// Task 1
function throwError() {
  throw new Error("This is a custom error made by developer");
}
try {
  throwError();
} catch (err) {
  console.log("An error Occurred -> ", err.message);
}

// Task 2

function division(a, b) {
  if (b == 0) {
    throw new Error("B ki value 0 hogi toh divide kaise karega ? ch****");
  }
  return a / b;
}

try {
  const divideResult = division(22, 0);
  console.log(divideResult);
} catch (error) {
  console.log("Error aagyi na => ", error.message);
}

// Activity 2 : Finally Block

// Task 3

function taskScript() {
  throw new Error("This is the custom error created by SDE");
}

try {
  taskScript();
} catch (error) {
  console.log("Catch -> eRROR is ->", error.message);
} finally {
  console.log(
    "Finally ->",
    "This code runs regardless of whether an error occured or not"
  );
}

// Activity 3: Custom error objects

// Task 4

class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

function throwCustomError() {
  throw new Error("CEO has found new errors in web app.");
}

try {
  throwCustomError();
} catch (error) {
  console.log("Ab kya dikkat aagyi -> ", error.message);
}

// Task 5

function validateInput(input) {
  if (input.trim() === "") {
    throw {
      name: "ValidationError",
      message: "Input cannot be empty",
    };
  }

  return true; // input is valid
}

try {
  const userInput = " ";
  validateInput(userInput);

  console.log("Input is valid");
} catch (error) {
  if (error.name === "ValidationError") {
    console.log("Validation Error: ", error.message);
  } else {
    console.log("an unexpected error", error.message);
  }
}

// Activity 4: Error Handling in Promises

// Task 6

const randomPromise = new Promise((resolve, reject) => {
  const msg = "Hey how are u doing ?";
  const shouldResolve = Math.random() > 0.5;
  if (shouldResolve) {
    resolve(msg);
  } else {
    reject(new Error("Something went wrong!"));
  }
});

randomPromise
  .then((msg) => {
    console.log("Resolved with message:", msg);
  })
  .catch((error) => {
    console.log("Caught an error:", error.message);
  });

// Task 7

async function randomTask() {
  try {
    const msg = await randomPromise;
    console.log("Resolved with new Message: ->  ", msg);
  } catch (error) {
    console.log("Caught a new error : -> ", error.message);
  }
}

randomTask();






// Activity 5: Graceful error handling in fetch

// Task 8

function fetchFromInvalidUrl() {
  fetch("https://api.example.com/invalid-endpoint")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error aagyi hai, status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data recieved: ", data);
    })
    .catch((error) => {
      console.log("fresh error occurred", error.message);
    });
}

fetchFromInvalidUrl();

// Task 9
async function newTaskFunc() {
  try {
    const response = await fetch("https://api.example.com/invalid-endpoint");

    if (!response.ok) {
      throw new Error(`Error aagyi hai fir se, status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data recieved: ", data);
    return true;
  } catch (error) {
    console.log("New fresh error -> ", error.message);
    return false;
  }
}

newTaskFunc();
