// Objects

//  Activity 1 : Object Creation and Access

// Task 1
let bookDetails = {
  title: "Chai aur Code | Objects",
  author: "Hitesh Ji",
  year: "2024",
};

// console.log(bookDetails);

// Task 2
// console.log(bookDetails.title);
// console.log(bookDetails.author);

// Activity 2 : Object Methods

// Task 3
bookDetails = {
  title: "Chai aur Code | Objects",
  author: "Hitesh Ji",
  year: "2024",
};
function bookDescription(bookDetails) {
    return `${bookDetails.title} by ${bookDetails.author}`;
}
  
// console.log(bookDescription(bookDetails))


//  Task 4
function updatingBookYear(bookDetails){
    return bookDetails.year = "2023"
}
// console.log(updatingBookYear(bookDetails));


// Activity 3 : Nested Objects

// Task - 5 
let library = {
    name:"Zindagi",
    codingBooks:{
       title:"Chai aur coders | Objects",
       author:"Hitesh Ji",
       year: "2024",
       bookDesc: function(){
        return `${this.title} by ${this.year}`
       }
    },
    engineering:{
        title:"Kuch kaam ki nahi hai",
        author:"Agar tumne hitesh bhaiya se nai seekha toh"
        
    }
}

// console.log(library)


// Task - 6
// console.log(library.name)
// console.log(library.codingBooks.title)
// console.log(library.engineering.title)



// Activity 4 : The this Keyword

// Task - 7
 library = {
    name:"Zindagi",
    codingBooks:{
       title:"Chai aur coders | Objects",
       author:"Hitesh Ji",
       year: "2024",
       bookDesc: function(){
        return `${this.title} by ${this.year}`
       }
    },
    engineering:{
        title:"Kuch kaam ki nahi hai",
        author:"Agar tumne hitesh bhaiya se nai seekha toh"
    }
}
// console.log(library.codingBooks.bookDesc())



// Activity 5 : Object Iteration

// Task 8 
for(let key in library){
    console.log(`${key}: ${library[key]}`)
}


// Task 9 
let keys = Object.keys(library)
let values = Object.values(library)

console.log(`keys: `, keys)
console.log('values: ', values)