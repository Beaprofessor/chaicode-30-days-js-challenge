// Promises and async/await

// Activity 1 : Understanding Promises

// Task 1
let promiseBhai = new Promise((resolve, reject) => {
  let message = "Hanji toh chaliye shuru karte hai aaj ke tasks";

  setTimeout(() => {
    resolve(message);
  }, 2000);
});

promiseBhai.then((message) => {
  //   console.log(message);
});

// Task 2
let promiseTwo = new Promise((resolve, reject) => {
  let text = "Naa bhaii ,Rejected!!!";
  setTimeout(() => {
    reject(text);
  }, 2000);
});

promiseTwo
  .then((text) => {
    // console.log(text); // This won't be executed as promise rejects
  })
  .catch((err) => {
    // console.log(err)
  });

// Activity 2 : Chaining Promises

// Task 3
function fetchData(url, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Fetched data from the ${url}`);
    }, delay);
  });
}

fetchData("https://api.example.com/data1", 1000)
  .then((data) => {
    // console.log(data);
    return fetchData("https://api.example.com/data2", 2000);
  })
  .then((data) => {
    // console.log(data);
    return fetchData("https://api.example.com/data3", 3000);
  })
  .then((data) => {
    // console.log(data);
    // console.log("All the data is fetched from these URL's");
  });

// Activity 3 : Async / Await

// Task 4
const asyFunc = async () => {
  let value = await new Promise((resolve, reject) => {
    let text1 = "Text toh update karle.";
    resolve(text1);
  });
  return value;
};

asyFunc().then((msg) => {
  //   console.log(msg);
});

// Task 5
const taskFive = async () => {
  try {
    let newValue = await new Promise((resolve, reject) => {
      let content = "yaha toh reject kardiya sabne";
      reject(content);
    });
    // console.log(newValue);
  } catch (error) {
    // console.log(error);
    return "Default value";
  }
};

taskFive().then((msg) => {
  //   console.log(msg);
});

// Activity 4: Fetching Data from an API

// Task 6
const url = "https://jsonplaceholder.typicode.com/posts/3";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
  });

// Task 7
const newFunct = async () => {
  const newUrl = "https://jsonplaceholder.typicode.com/posts/22";
  try {
    const response = await fetch(newUrl);
    if (!response.ok) {
      console.log("network issue aagya bhaii" + response.statusText);
    }
    const data = await response.json();
    // console.log(data)
  } catch (error) {
    console.log("problem ye thi bhaii -> ", error);
  }
};

newFunct();

// Activity 5: Concurrent Promises

// Task 8

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let siuu = "Dekhe kon first aayega"
      resolve(siuu)
    },100);
  });

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let siu = "Haa dekhte hai bete"
    resolve(siu)
  },300);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
      let foo = "foooo"
      resolve(foo)
  },200)
});

Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
});



// Task 9

Promise.race([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });