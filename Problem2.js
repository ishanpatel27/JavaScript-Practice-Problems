// Write the function in javascript which takes 
//the input as a format “good_active_Learning” and
// produces the output “goodactiveLearning” 
// Author: Ishan Patel
// Created: 07/01/2021 13:41 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter the String to Remove the Delimiter :  `, (name) => {

    readline.close();
    console.log("\n");
    console.log("Initial String input  :" +name);

// Function Starts Here 
function removeunderscore(name)
{
        var r= /[.?,_\s]+/ ;
        var op= name.split(r) ;

        var str = op.join('');

        console.log("Output String : " +str) ;
        

        }

        removeunderscore(name) ;
  })

