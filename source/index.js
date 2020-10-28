import{add,subtract,divide,multiply,operate} from "./functions.js"

//here we create the calculator body and add all the buttons using a for loop
const calculatorBody=document.querySelector(".calculator-body")
for(let i=0;i<=9;i++){
  const buttonEl=document.createElement("button");
  buttonEl.textContent=i;
  buttonEl.setAttribute("id",`_${i}`);
  buttonEl.setAttribute("value",`${i}`)
  calculatorBody.appendChild(buttonEl);
}


console.log(operate("&",2,3,4));

document.querySelector("#_1").addEventListener("click",(e)=>{
  document.querySelector("#display").value+=e.target.value;
  const number1=document.querySelector("#display")
})
