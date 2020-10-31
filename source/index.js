import{operate} from "./functions.js"
import{buttonOperate,giveOperator,displayEl,giveDisplayValue,equalsFunction,giveNumbersArray,changeDisplayAndElement} from "./eventListeners.js"

const mike=2;
console.log(mike.toFixed(4))
//here we create the calculator body and add all the buttons using a for loop
const calculatorBody=document.querySelector(".calculator-body")
//displayValue is the string value entered into the displayEl, aka our actual number,but in string form .It begins as an empty string and adds whatever number we typed in, so because of this the numbers are added as strings, instead of actual numbers.so 1 typed four times is 1111 instead of 4. Later on, we will make this string into a number.
let displayValue=giveDisplayValue();
let numbersArray=giveNumbersArray();
let operator=giveOperator();

const allOperators=document.querySelectorAll(".operator");

//for each button 0-9
for(let i=0;i<=9;i++){
  const buttonEl=document.createElement("button");
  //add textContent equal to the number of it
  buttonEl.textContent=i;
  //add an id equal to "_i". Remember, id's have to start with letter or underscore or something else
  buttonEl.setAttribute("id",`_${i}`);
  //add a value attribute equal to "i", so when we click button, we know what that value is, even though its in string form. We can change to number form later
  buttonEl.setAttribute("value",`${i}`);
  //add event listener to each button
  buttonEl.addEventListener("click",(e)=>{
    //if array length is 1 already, it means we have just pressed equal sign, which just adds the solution into the numbersArray.If we're clicking another number, it means we want a new number to replace the number there already. So we clear the numbers Array and get a new displayValue.
    if(numbersArray.length===1){
      numbersArray=[]
      //the new displayValue string is the oldValue plus whatever number we typed
      changeDisplayAndElement(e.target.value);
      displayValue=giveDisplayValue();
    }else{
      //the new displayValue string is the oldValue plus whatever number we typed
      displayValue+=e.target.value;
      //set the displayEl.value equal to whatever displayValue is
      displayEl.value=displayValue;
    }

  })
  calculatorBody.appendChild(buttonEl);
}

//add event listener for keyboard support 0-9
window.addEventListener("keydown",(e)=>{
  for(let i=0;i<=9;i++){
      if(e.key===`${i}`){
        if(numbersArray.length===1){
          numbersArray=[]
          //the new displayValue string is the oldValue plus whatever number we typed
          displayValue+=e.key
          //set the displayEl.value equal to whatever displayValue is
          displayEl.value=displayValue;
        }else{
          //the new displayValue string is the oldValue plus whatever number we typed
          displayValue+=e.key
          //set the displayEl.value equal to whatever displayValue is
          displayEl.value=displayValue;
        }
      }
  }
})


//add event listener for keyboard support / * - +
window.addEventListener("keydown",(e)=>{
  if(e.key==="+"||e.key==="*"||e.key==="-"||e.key==="/"){
      buttonOperate(e.key,displayValue,numbersArray);
      displayValue=giveDisplayValue();
      operator=giveOperator();
      numbersArray=giveNumbersArray();
  }
})

//event listener for the decimal
document.querySelector("#decimal").addEventListener("click",(e)=>{
  //if the displayValue already includes a decimal, don't do anything. We don't want another decimal added
  if(displayValue.includes(".")){

  //but if there is no decimal, add that decimal to the displayValue string
  }else{
    //the new displayValue string is the oldValue plus whatever number we typed
    displayValue+=e.target.value;
    //set the displayEl.value equal to whatever displayValue is
    displayEl.value=displayValue;
  }

})


//event listener for all the operators
allOperators.forEach((operator)=>{
  operator.addEventListener("click",(e)=>{
    buttonOperate(e.target.value,displayValue,numbersArray);
    //set displayValue equal to an empty string, so when we click another number, displayValue will add that number to our empty string and then displayEl.value will be this string
    displayValue=giveDisplayValue();
    operator=giveOperator();
    numbersArray=giveNumbersArray();
  })
})

//event listener for equals sign
document.querySelector("#equals").addEventListener("click",(e)=>{
  equalsFunction(numbersArray,displayValue);
  displayValue=giveDisplayValue();
  numbersArray=giveNumbersArray();
})

window.addEventListener("keydown",(e)=>{
  if(e.key==="="){
    equalsFunction(numbersArray,displayValue);
    displayValue=giveDisplayValue();
    numbersArray=giveNumbersArray();9
  }
})

//event listener for the clear button
document.querySelector("#clear").addEventListener("click",(e)=>{
  numbersArray=[]
  displayValue="";
  displayEl.value=displayValue;
})

//event listener for the backspace button
document.querySelector("#delete").addEventListener("click",(e)=>{
  //let letterNumber equal to display value
  //if displayValue is equal to an empty string, meaning nothing has been entered for the current number, there is nothing to backspace, so don't delete it.
  if(displayValue===""){

  }else{
  //split the displayValue string into an array of items
  const displayArray=displayValue.split("");
  //pop the last item
  displayArray.pop()
  //join the array into a string using a spaceless string
  displayValue=displayArray.join("");
  //set the displayEl value to displayValue;
  displayEl.value=displayValue;
  }

})
