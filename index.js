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
