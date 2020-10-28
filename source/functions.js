const add= (...numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		return totalAccumulated+number
	})
}

const subtract= (...numbers)=> {
	return numbers.reduce((total,number,index)=>{
			return total-number
	})
}

const multiply= (numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		return totalAccumulated*number
	})
}


const divide=(...array)=>{
  return array.reduce((total,currentNumber)=>{
    return (total/currentNumber)
  })
}

const operate=(operator,...numbers)=>{
  if(operator==="+"){
    return add(...numbers)
  }else if(operator==="-"){
    return subtract(...numbers)
  }else if(operator==="x"){
    return multiply(...numbers);
  }else if(operator==="/"){
    return divide(...numbers);
  }
}

export{add,subtract,multiply,divide,operate}
