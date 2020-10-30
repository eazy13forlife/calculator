import{add,subtract,divide,multiply,operate} from "./functions.js"

const mik=0;
console.log(mik.toString())

//here we create the calculator body and add all the buttons using a for loop
const calculatorBody=document.querySelector(".calculator-body")
const displayEl=document.querySelector("#display");
//displayValue is the string value entered into the displayEl, aka our actual number,but in string form .It begins as an empty string and adds whatever number we typed in, so because of this the numbers are added as strings, instead of actual numbers.so 1 typed four times is 1111 instead of 4. Later on, we will make this string into a number.
let displayValue="";
let numbersArray=[];
let operator;

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
      displayValue="";
      //the new displayValue string is the oldValue plus whatever number we typed
      displayValue+=e.target.value;
      //set the displayEl.value equal to whatever displayValue is
      displayEl.value=displayValue;
    }else{
      //the new displayValue string is the oldValue plus whatever number we typed
      displayValue+=e.target.value;
      //set the displayEl.value equal to whatever displayValue is
      displayEl.value=displayValue;
    }

  })
  calculatorBody.appendChild(buttonEl);
}

console.log(document.querySelectorAll("button"))
//event listener for the decimal
document.querySelector("#decimal").addEventListener("click",(e)=>{
  //the new displayValue string is the oldValue plus whatever number we typed
  displayValue+=e.target.value;
  //set the displayEl.value equal to whatever displayValue is
  displayEl.value=displayValue;

})


//event listener for all the operators
const allOperators=document.querySelectorAll(".operator");
allOperators.forEach((operator)=>{
  operator.addEventListener("click",(e)=>{
    //set the operator equal to the value of the target,in this case, multiply;
    operator=e.target.value;
    let number=+displayValue;
		let letterNumber=displayValue;
    //if first number exists and operator exists but the second number is empty(meaning it hasnt been entered yet),yet we're clicking calculator again, just change the operator, because means we want a new operator.
    if((numbersArray[0]||numbersArray[0]===0)&&(numbersArray[1])&&(letterNumber==="")){
      numbersArray[1]=operator;
		 //if the first number exists or it equals 0 AND the operator doesn't exist(which means the equals sign has just been pushed),just push the operator in and that's it. Then we will select another number and after pressing multiply again, the last else statements will run.
    }else if((numbersArray[0]||numbersArray[0]===0)&&!numbersArray[1]){
      numbersArray.push(operator);
    }else{
      //if the first number in numbersArray exists or if it equals 0. if we don't put the second part, it wont work because if first number is 0, that means the first item in array is a falsy value,so the else value will run instead.
      if(numbersArray[0]||numbersArray[0]===0){
        //push in the new number value that we just typed, so now we have 2 numbers in our numbersArray along with the operator from previous operator
        numbersArray.push(number);
        //call our operate function using 2 arguments. 1. our operator from current numbersArray,which is saved and 2. the numbersArray(which we remove the operator from, so we are only dealing with numbers). The valuu, which is a number type, will be stored in displayValue. Get this value first, push it into an empty array and then push our current operator and save it in this new array.
        const previousOperator=numbersArray[1];
        numbersArray.splice(1,1)
        displayValue=operate(previousOperator,numbersArray);
        //set the displayEl value equal to whatever displayValue is
        displayEl.value=displayValue;
        //create a new array, since we already had 2 numbers in the previous array and got the solution. Remember, this calculator will only work with 2 numbers at a time.
        numbersArray=[];
        //push the displayValue into the numbersArray for the first number. Now when we perform another operation, we are operating on this first number.
        numbersArray.push(displayValue);
        numbersArray.push(operator);
      //if first number in numbersArray doesn't exist
      }else if(!numbersArray[0]){
        //push number into numbersArray, so we have it saved.
        numbersArray.push(number);
        //also push operator in the fuction so we have it saved as well
        numbersArray.push(operator);
        console.log(numbersArray)
      }
    }
    //set displayValue equal to an empty string, so when we click another number, displayValue will add that number to our empty string and then displayEl.value will be this string
    displayValue="";
  })
})

//event listener for equals sign
document.querySelector("#equals").addEventListener("click",(e)=>{
  //if array length is 1 meaning something has already been equaled and thats it(but we're clicking equal again) or the length is 0 meaning no operation has been done(but were clicking equal again), don't do anything.
    if(numbersArray.length===1||numbersArray.length===0){

    }else{
      //but if the first number and operator has been done, but our second number hasnt been entered,meaning its equal to a blank string or 0(but we're clicking equal again, don't do anything)
      let letterNumber=displayValue;
      let number=+displayValue;
      if(letterNumber===""){

      }else{
      numbersArray.push(number)
      const currentOperator=numbersArray[1];
      const newNumbersArray= numbersArray.join("")
                        //do not match any digits 0-9 or a decimal
                        .replace(/[^\d.]/g," ")
                        .split(" ")
                        .filter((number)=>{
                          if(number!==""){
                            return true;
                          }
                        })
      newNumbersArray.forEach((number,index)=>{
        newNumbersArray[index]=+number
      })
      console.log(newNumbersArray)
      displayValue=operate(currentOperator,newNumbersArray);
      displayEl.value=displayValue;
      numbersArray=[];
      numbersArray.push(displayValue);
      console.log(numbersArray)
    }
  }
})


//event listener for the clear button
document.querySelector("#clear").addEventListener("click",(e)=>{
  numbersArray=[]
  displayValue="";
  displayEl.value=displayValue;
})
