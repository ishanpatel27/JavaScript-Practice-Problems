//There is a club that has a membership program. They charge $20 for paid members and for free is $2. 
//Write a function that accepts the member type as a flag and returns their membership charge.
// Author: Ishan Patel
// Created: 07/01/2021 17:51
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter that you are Paid or Free  :   `, (charge) => {

    readline.close();
    console.log("\n");

function getfee(charge)
{

        var message = charge == "Paid" ? 'FEE is $20' : (charge == "Free" ? 'FEE is $2' : "");
        console.log(message);

        }
        getfee(charge);

  })