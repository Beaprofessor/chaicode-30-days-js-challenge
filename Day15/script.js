// Day 15


// Activity 1 : Understanding Closures


// Task 1
function outerFunction(greeting){

    return function innerFunction(name){
        return `${greeting}, ${name}`
    }
}

const greet = outerFunction('hello')
// console.log(greet('Akhil'))


// Task 2
function createCounter(){
    let counter = 0

    return {
        increment(){
            counter++
        },
        getValue(){
            return counter
        }
    }
}

// const myCounter = createCounter()
// console.log(myCounter.getValue())

// myCounter.increment()
// console.log(myCounter.getValue())

// myCounter.increment()
// console.log(myCounter.getValue())



// Activity 2: Practical Closures

// Task 3
function createId(){
    let id = Math.floor(Math.random() * 100)
    let lastId = id
    return {
        getValue(){
            return `My new ID is ${id} and last ID was ${lastId}`
        },
        generateNewId() {
            lastId = id; 
            id = Math.floor(Math.random() * 100); 
        }
    }
}

const myId = createId()
// console.log(myId.getValue())

myId.generateNewId()
// console.log(myId.getValue())

myId.generateNewId()
// console.log(myId.getValue())

myId.generateNewId()
// console.log(myId.getValue())




// Task 4 
function createGreet(name){

    return function greet(){
        return `Hello , ${name}`
    }

}

const greetJohn = createGreet('john')
console.log(greetJohn())



// Activity 3: Closures in Loops


// Task 5
const functionsArray = [];

for (let i = 0; i < 5; i++) {
    
    functionsArray.push((function(index) {
        return function() {
            console.log(index);
        };
    })(i)); 
}

functionsArray.forEach(func => func());


// Activity 4: Module Pattern

// Task 6

function createItems(){
    let items = [];

    function addItem(item){
        items.push(item)
        console.log(`Item added : ${item}`)
    }
    function removeItem(item){
        const index = items.indexOf(item)
        if(index > -1){
            items.splice(index,1)
            console.log(`Item removed : ${item}`)
        }
        else{
            console.log(`Item not found: ${item}`)
        }
    }

    function listItems() {
        if (items.length === 0) {
            console.log('No items in collection.');
        } else {
            console.log('Items in collection:');
            items.forEach(item => console.log(item));
        }
    }

    return {
        addItem,
        removeItem,
        listItems
    }
}

const itemManager = createItems()

itemManager.addItem('Apple')
itemManager.addItem('mango')
itemManager.addItem('strawberry')
itemManager.addItem('banana')
itemManager.listItems()

itemManager.removeItem('Apple')
itemManager.listItems()





// Activity 5: Memoization

// Task 7

