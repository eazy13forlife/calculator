const add= (numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		return totalAccumulated+number
	})
}

const subtract= (numbers)=> {
	return numbers.reduce((total,number,index)=>{
			return total-number
	})
}

const multiply= (numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		return totalAccumulated*number
	})
}


const divide=(array)=>{
  return array.reduce((total,currentNumber)=>{
    if(currentNumber===0){
      return `You can't divide by 0 silly!`
    }else{
    return (total/currentNumber)
    }
  })
}

const operate=(operator,...numbers)=>{
  if(operator==="+"){
    return add(...numbers)
  }else if(operator==="-"){
    return subtract(...numbers)
  }else if(operator==="*"){
    return multiply(...numbers);
  }else if(operator==="/"){
    return divide(...numbers);
  }
}



/*dont use
const buttonOperate=(operatorValue,displayValue,numbersArray)=>{
  //set the operator equal to the value of the target,in this case, multiply;
  operator=operatorValue;
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
    }
  }
  //set displayValue equal to an empty string, so when we click another number, displayValue will add that number to our empty string and then displayEl.value will be this string
  displayValue="";
}
*/
export{add,subtract,multiply,divide,operate}
