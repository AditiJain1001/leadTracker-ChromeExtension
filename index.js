// how to add keyborad funtionality by pressing enter on keyboard
// how to clear the value in search bar after save input clicked and or enter pressed 
// get chatgpt to orangize code and add appripriate comments
// ask chatgpt if there is additional funtionality that would be cool to add

let myLeads = [];

//input element
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")



const handleButtonClicked = () => {
    //get input value from text box
    myLeads.push(inputEl.value);
    console.log(myLeads);
}

inputBtn.addEventListener("click", handleButtonClicked);

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    
    //alternative to innerHTML:
    // 1. create element
    // 2. set text content
    // 3. append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
    }
