/*a. The function accepts an argument userid

b. The userid should be number and >0. If not throw the error saying invalid userid.

c. Use the promise to resolve the result. 
The result should be Object which containing userid and username for example {id: id,username: 'admin'}

d. Handle the promise using then() and catch() methods. 

Author : Ishan Patel 23:10 */

function checkit(userid)
{
    num=Number.isInteger(userid)


    if(num == true && num>0 )
    {
        console.log("Valid");
    }
    else
    {
        throw ("Invalid User ID");
    }

    var promise = new Promise(function(resolve, reject) { 
        const x = 12345; 
        var id=userid;
        var username= 'admin' ;
        if(x === id) { 
          resolve(); 
          console.log("Username is set as :" +username);
        } else { 
          reject(); 
        } }); 
      promise.then(function(){ 
      console.log('Successfully Id Validated ');}).catch(function () { 
      console.log('Id not Validated to user input');});
    
}

checkit(12345);