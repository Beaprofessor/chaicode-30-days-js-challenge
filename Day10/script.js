// Event Handling

// Activity 1 : Basic Event Handling

// Task 1
let btn = document.getElementById("btn");
let para = document.getElementById("para");
let firstDiv = document.getElementById("firstDiv");

btn.addEventListener(
  "click",
  () => (para.textContent = "Hanji veere kaisi chal rahi hai coding ?")
);

firstDiv.appendChild(btn);
firstDiv.appendChild(para);

// Task 2
let img = document.getElementById("image");
let secondDiv = document.getElementById("secondDiv");

img.addEventListener("dblclick", () => {
  if ((img.style.visibility = "visible")) {
    img.style.visibility = "hidden";
  } else {
    img.style.visibility = "visible";
  }
});

secondDiv.appendChild(img);



// Activity 2: Mouse Events


// Task 3
para.addEventListener('mouseover',()=> para.style.backgroundColor = "purple")


// Task 4
para.addEventListener('mouseout',()=> para.style.backgroundColor = "pink")




// Activity 3: Keyboard Events


// Task 5
let inputField = document.getElementById('inputField')
let displayText = document.getElementById('displayText')


inputField.addEventListener('keydown',(event) => console.log(event.key))


// Task 6
inputField.addEventListener('keyup',() => {
   let inputText = inputField.value 
   displayText.textContent = inputText
})



// Activity 4: Form Events

// Task 7
let form = document.getElementById('form')
let fourthDiv = document.getElementById('fourthDiv')

form.addEventListener('submit',(event)=> {
    event.preventDefault()   // This will prevent the default submission
    
    const formData = new FormData(event.target)
    const formObject = {}
    formData.forEach((value,key) => {
      formObject[key] =value
    })


    console.log("Form Data: " , formObject)
    // formData.forEach((value, key) => {
    //   console.log(` ${key} :  ${value}`);
    // });
})

fourthDiv.appendChild(form)



// Task 8
let color = document.getElementById('color')
let displaySelectedColor = document.getElementById('displaySelectOptions') 
let myDiv = document.getElementById('myDiv')
let fifthDiv = document.getElementById('fifthDiv')

color.addEventListener('change', () => {
  let selectedColor = color.value
  console.log(selectedColor)
  displaySelectedColor.textContent = selectedColor
})

myDiv.appendChild(color)
fifthDiv.appendChild(myDiv)
fifthDiv.appendChild(displaySelectedColor)




// Activity 5 : Event Delegation


// Task 9
let selectedItem = document.getElementById('itemList')
let sixthDiv = document.getElementById('sixthDiv')

selectedItem.addEventListener('click' , (event) => {
  event.target.tagName === 'li'
  console.log(event.target.textContent)
})


// Task 10
let addItem = document.getElementById('addItem')

addItem.addEventListener('click', ()=>{
  const newItem = document.createElement('li')
  newItem.textContent = 'Item ' + (document.querySelectorAll('#itemList li').length + 1)   ;
  selectedItem.appendChild(newItem)
})

sixthDiv.appendChild(selectedItem)
sixthDiv.appendChild(addItem)