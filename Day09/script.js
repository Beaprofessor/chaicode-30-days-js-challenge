//  DOM Manipulation

// Activity 1: Selecting and Manipulating Elements

// Task 1
let box = document.getElementById("box");
box.textContent = "Hanji Bhaii";

// Task 2
let changeBgColor = document.getElementsByClassName("hero")[0];
changeBgColor.style.backgroundColor = "red";

// Activity 2 : Creating and Appending Elements

// Task 3
let addNewElement = document.createElement("div");
box.appendChild(addNewElement);

// Task 4
let ulItem = document.getElementById("ul-list");
let addListElement = document.createElement("li");
addListElement.textContent = "Hanji new List item added";
ulItem.appendChild(addListElement);

// Activity 3: Removing Elements

// Task 5
ulItem.remove(); // Here i have removed the complete ul item.

// Task 6
changeBgColor.remove(); // Simply removed the last item of the container element.

// Activity 4: Modifying Attributes and Classes

// Task 7
let changeImg = document.getElementById("picture");
changeImg.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";

// Task 8
let footer = document.getElementById("footer");
footer.style.backgroundColor = "white";

// Activity 5 : Event Handling

// Task 9
let lastFooter = document.getElementById("lastFooter");
let button = document.getElementById("btn");
let para = document.getElementById("para");

button.addEventListener("click", () => {
  para.textContent = "Hanji bhaii badiya hai tu bata tere ke haal hai";
});

lastFooter.appendChild(button);
lastFooter.appendChild(para);


// Task 10
box.addEventListener('mouseover', ()=>{
    box.style.borderColor = 'red'
})