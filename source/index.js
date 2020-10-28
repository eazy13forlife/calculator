import{add,subtract,divide,multiply,operate} from "./functions.js"


const calculatorBody=document.querySelector(".calculator-body")
for(let i=0;i<=9;i++){
  const buttonEl=document.createElement("button");
  buttonEl.textContent=i;
  buttonEl.setAttribute("id",`_${i}`);
  calculatorBody.appendChild(buttonEl);
}


console.log(operate("&",2,3,4));
