import{operate} from "./functions.js"
import{getCat} from "./index.js"
const displayEl=document.querySelector("#display");
let displayValue="";
let numbersArray=[];

const giveNumbersArray=()=>{
  return numbersArray;
}

const giveDisplayValue=()=>{
  return displayValue;
}



const buttonOperate=(operatorValue,displayString,array)=>{
  //set the operator equal to the value of the target,in this case, multiply;
  let operator=operatorValue;
  let number=+displayString;
  //if first number exists and operator exists but the second number is empty(meaning it hasnt been entered yet),yet we're clicking calculator again, just change the operator, because means we want a new operator. So, a number and an operator means that we just ran one of the operations. After we run it, we immediately call giveNumbersArray so  numbersArray is a reference to the array argument, so anything that happens to the array arguent also happens to the numbersArray argument, making them equal. Which is what we want.
  if(!array[0]&&array[0]!==0&&displayString===""){
    displayEl.value=`Put in a number`
  }else if((array[0]||array[0]===0)&&(array[1])&&(displayString==="")){
    //going to affect the array argument
    array[1]=operator;
   //if the first number exists or it equals 0 AND the operator doesn't exist(which means the equals sign has just been pushed),just push the operator in and that's it. Then we will select another number and after pressing multiply again, the last else statements will run. When the equal sign runs,the numberArray here changes, so we called giveNumbersArray in the other function and set it equal to the array argument. So the numbersArray here is a reference to the array argument so any change made to one affects the other. So pushing the operator into the array argument here, also affects numbersArray, so they will be equal which is what we want.
 }else if((array[0]||array[0]===0)&&!array[1]){
   //going to affect the array argument
    array.push(operator);
  }else{
    //if the first number in numbersArray exists or if it equals 0. if we don't put the second part, it wont work because if first number is 0, that means the first item in array is a falsy value,so the else value will run instead.
    if(array[0]||array[0]===0){
      //push in the new number value that we just typed, so now we have 2 numbers in our numbersArray along with the operator from previous operator
      array.push(number);
      //call our operate function using 2 arguments. 1. our operator from current numbersArray,which is saved and 2. the numbersArray(which we remove the operator from, so we are only dealing with numbers). The valuu, which is a number type, will be stored in displayValue. Get this value first, push it into an empty array and then push our current operator and save it in this new array.
      const previousOperator=array[1];
      array.splice(1,1)
      displayValue=operate(previousOperator,array);
      //set the displayEl value equal to whatever displayValue is
      displayEl.value=displayValue;
      //create a new array,If we set our array argument equal to a whole new function, it wont affect the array argument( we can only change its properties for it to be affected, we can't modify the whole thing), so we have to set this new array to a whole new variable and then reassign to numbersArray, so numbersArray will have it. now numbers array here and arrays argument are the same as well.
      numbersArray=[];
      //push the displayValue into the numbersArray for the first number. Now when we perform another operation, we are operating on this first number.
      numbersArray.push(displayValue);
      numbersArray.push(operator);
      //we have to call giveArrayValue after this one because we setNumbersArray equal to something else
    //if first number in numbersArray doesn't exist
  }else if(!array[0]){
      //push number into array, so we have it saved. Since objects are passed in as references, a change made here will affect the object argument as well, as long as we don't redefine the object as a whole
      array.push(number);
      //also push operator in the fuction so we have it saved as well
      array.push(operator);
      //set the array here equal to the array argument passed in.Since the array argument is a reference to the numbersArray in this file, a change in the argument changes numbersArray as well. But, after an equal sign is clicked,and a number is clicked, we change the array argument equal to an empty array, so its no longer the same as the numbersArray here. So this numbersArray will equal what it was right after the equal sign was clicked, which will fuck us up.So we need to make sure, they are equal again
      numbersArray=array;
    }
  }
  displayValue="";
  //at the end of this, we changed the actual displayValue and numbersArray value that we will need for code in other functions, so we have to make sure to call giveNumbersArray and giveDisplayValue to get the correct values for those variables
}

const equalsFunction=(array,displayString)=>{
  //if array length is 1 meaning something has already been equaled and thats it(but we're clicking equal again) or the length is 0 meaning no operation has been done(but were clicking equal again), don't do anything.
    if(array.length===1||array.length===0){

    }else{
      //but if the first number and operator has been done, but our second number hasnt been entered,meaning its equal to a blank string(but we're clicking equal again,) don't do anything.
      let number=+displayString;
      if(displayString===""){

      }else{
      array.push(number)
      const currentOperator=array[1];
      const newNumbersArray= array.join("")
                        //Match anything that is not 0-9 or a decimal and replace with empty string.
                        .replace(/[^\d.]/g," ")
                        //split wherever we see an empty string(this will lead to items that are empty strings in our array)
                        .split(" ")
                        //looking at our current array, filter our the items that are  not an empty string in our array
                        .filter((number)=>{
                          if(number!==""){
                            return true;
                          }
                        })
      //for each item in our newNUmbers array, make it a number instead of a string
      newNumbersArray.forEach((number,index)=>{
        newNumbersArray[index]=+number
      })
      displayValue=operate(currentOperator,newNumbersArray);
      displayEl.value=displayValue;
      //here we are creating a whole new array, so the array argument that was passed in, which is a reference to the numbersArray here, will not be affected, since we are creating a whole new array. So we store it in numbersArray, so numbersArray has it and then we will call giveNumbersArray in index.js so it has it as well, and is a reference.
      numbersArray=[];
      numbersArray.push(displayValue);
      //reset displayValue equal to an empty string so after equals sign, so we can maintan displayValue alwaus being a string of some sort. We dont want it to be a string sometimes and a number the next.
      displayValue="";
    }
  }
}

const changeDisplayAndElement=(stringValue)=>{
  displayValue=stringValue;
  displayEl.value=displayValue;
}

export{buttonOperate,displayEl,giveDisplayValue,equalsFunction,giveNumbersArray,changeDisplayAndElement}
