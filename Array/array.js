//Given a number X, followed by X number of strings. 
//Store all strings in an array then print the array in reverse order with the index.

const {nextLine} = require("@learnly/simple-reader");

let totalNames = "";
let names = []
let y = "";

// x is 1st input and represents N (number)


let x = Number(nextLine());

while(true) {

// y is string(name) input
  y  = (nextLine());
// TotalNames is loop for nextLine() input

  totalNames++;
 
//add inputs into array called "names" 
  
  names.push(y)

//constraints  
  if (names.length == x || names.length > 100) {
    
    break;
  }
}

//Check that the total of string //(name) inputs equal first //input (Number)

//console.log(totalNames)

//Reverse iteration to display last name first 
for(i = names.length -1; i>=0;i--)
  {
  
//display index and names in reverse order
   console.log([i] + " " +names[i])
  }


