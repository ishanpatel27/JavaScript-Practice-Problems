//function that accepts the string as input 
//and check the first character of the input is upper case or not.
//Assumptions: The program should describe the use of Regular expression.
// Author: Ishan Patel
// Created: 07/01/2021 18:19
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter the STRING TO CHECK THE CASE OF FIRST LETTER :   `, (str) => {

    readline.close();

function isUpperatIndx(str) {
    index=0
    STAT= str.charAt(index)
    if(STAT.match(/^[A-Z]*$/))
    {
        console.log("String's first character is  uppercase")
    }
    else
    {
        console.log("String's first character is not uppercase")
    }
       }
   isUpperatIndx('Js STRING EXERCISES');

    })
   
   