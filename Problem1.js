/* company wants to give a bonus of 10% of its current employee salary to those who have 
completed 5 years or above. Write the program to generate the list of those employees who is eligible. 
The output list will be name wise alphabetically sorted and containing the calculated salary.
Author : Ishan Patel 13:57
*/
let myobj = [
{"name": "Rahul Saxena","Salary": 10000,"years": 5},
 {"name": "Amit Kumar","Salary": 50000,"years": 2}, 
{"name": "Saurabh Bhandari","Salary": 6000,"years": 1},
{"name": "Priyanka Singh","Salary": 30000,"years": 10},
{"name": "Roshni Bhatnagar","Salary": 10000,"years": 7}]

for(i=0;i<myobj.length;i++)
{
    if(myobj[i].years>=5)
    {
        myobj[i].Salary = myobj[i].Salary + (10 * myobj[i].Salary/100);   
    }
    else{
        delete myobj[i]
    }
  }
var neww= myobj.sort(function(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 ; 
})
console.log(neww);
