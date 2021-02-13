// Write a function that accepts the date and produce the month name of the input as a result.
// Author: Ishan Patel
// Created: 07/01/2021 17:33
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter the Date in  : MM-DD-YYYY format   `, (date) => {

    readline.close();
    console.log("\n");
    console.log("Initial DATE  :" +date);

function getmon(date)
{
        var myDate = new Date(date),
        month = myDate.getMonth() ;

        var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

        console.log("THE MONTH IS : " +months[month]);

        }
 getmon(date)

  })