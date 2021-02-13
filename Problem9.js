/* Write the javascript code which achieve the following cases.

a. The code should be describing the use of arrow functions

b. The arrow function should accept two arguments callback and the params.

c. The callback should be printing the result on the console.

Author: Ishan Patel 01:21
*/
function callfunc(addition)
{
    console.log("Final Result Printing on console " +addition);

}

var add = (a,b,addition) => {
    var ans= a+b;
    addition(ans);
}

add(4,5,callfunc);