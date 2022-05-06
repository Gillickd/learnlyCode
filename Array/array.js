//Given a number X, followed by X number of strings. 
//Store all strings in an array then print the array in reverse order with the index.

const {nextLine} = require("@learnly/simple-reader");

let totalNames = "";
let names = []
let y = "";

// x is 1st input and represents N (number)


let x = Number(nextLine());

while(true) {

// y is string input
  y  = (nextLine());

  totalNames++;
  let count = (x + 1)
  //check that string(name) inputs = N and then end
  //Check that string(name) inputs are < = 100
  if (totalNames >= count || totalNames >= 101) {
    
    break;
  }
  
//check that N is <= 1
  if (x <= 1) {
    continue; 
  }
  names.push(y)
  }

//Reverse interation on array   
for(i = names.length -1; i>=0;i--)
  {
   console.log([i] + " " +names[i])
  }







