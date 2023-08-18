// how to add keyborad funtionality by pressing enter on keyboard
// how to clear the value in search bar after save input clicked and or enter pressed 
// get chatgpt to orangize code and add appripriate comments
// ask chatgpt if there is additional funtionality that would be cool to add

let myLeads = [];

//input element
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");



const handleButtonClicked = () => {
    //get input value from text box
    myLeads.push(inputEl.value);
    console.log(myLeads);
}

inputBtn.addEventListener("click", handleButtonClicked);
