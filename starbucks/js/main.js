//console.log("js has been loaded");

// variables, methods and functions

// 1. variables 
// beginning of introduction //
const myName ="Afnan Akinyele";
console.log(myName);

const myAge = 20;
const myCity= "Brooklyn";

const introduction = `Hi, my Name is ${myName}, I am ${myAge} and I am from ${myCity}`;

console.log(introduction);
// end of introduction // 

//2.methods
// start of menuBtn click event 
const menuBtn = document.getElementById("menuBtn");
const colseBtn = document.getElementById("colseBtn");
const overlay = document.getElementById("overlay");

console.log(menuBtn);

// "event name", call back function//
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
});// end of menuBtn click event 

//start of closeBtn//
closeBtn.addEventListener("click",function() {
    overlay.classList.remove("active");
}); //end of closeBtn//