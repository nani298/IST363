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

//basic variable 
const coffeeName = "Mocha";
const coffeeHeadline = document.createElement("h2");
coffeeHeadline.textContent = coffeeName;
document.body.appendChild(coffeeHeadline);


const coffee = {
    name:"Mocha",
    price:3.99,
    description:"This is a delicious cup of coffee"
};
console.log(coffee.description);
const coffeeObHeadline =document.createElement("h2");
coffeeObHeadline.textContent = coffee.name;
document.body.appendChild(coffeeObHeadline);

const coffees = ["Mocha","Latte","Espresso"];
//console.log(coffees[0]);

coffees.forEach(function(coffee) {
    console.log(coffee);
});