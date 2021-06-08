"use strict";




// person = {
//     name : "rehman",
//     age :    "thirteen",
//     innerSum :   function ()  {

//         console.log(this);
//     }
// }
 
//  console.log(person.innerSum());

// let test = document.createElement("P");
//   test.innerHTML  = "Hello World!!!";
  
  
//   document.body.appendChild(test);



  function myFunction() {
    // var para = document.createElement("P");
    // para.innerHTML = "This is a paragraph.";
   
let btn = document.createElement("button");
let btnbr = document.createElement("br");
btn.innerHTML = "Click Here";


document.getElementById("myDIV").appendChild(btn); 
document.getElementById("myDIV").appendChild(btnbr); 
}