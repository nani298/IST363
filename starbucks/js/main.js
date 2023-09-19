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

// const basicCoffees = ["mocha","latte","espresso"];
// basicCoffees.forEach(function(basicCoffees) {
//     console.log({basicCoffees});
// });

// const coffees = [
//     {
//         name:"Mocha",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//      {
//         name:"Latte",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//      {
//         name:"Esspresso",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }

//     },
//     {
//         name:"Mocha",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//      {
//         name:"Latte",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//      {
//         name:"Esspresso",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//     {
//         name:"Mocha",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//      {
//         name:"Latte",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//      {
//         name:"Esspresso",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//     {
//         name:"Mocha",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//      {
//         name:"Latte",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },
//      {
//         name:"Esspresso",
//         price:3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName:"coffee.jpg",
//             width:630,
//             height:630,
//             altText:"A cup of coffee"
//         }
//     },


// ];
//console.log(coffees[0]);

function buildTextElement(element,className, content){
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}

coffees.forEach(function(coffee) {
    const {title,price,description,image}=coffee;

    const coffeeArticle = document.createElement("article");
    coffeeArticle.classList.add("coffee-item");

    // const coffeeArticle = document.createElement("article");

    const coffeeImage = document.createElement("img");
    // coffeeImage.src =`images/${image.fileName}`;
    coffeeImage.width = image.width;
    coffeeImage.height =image.height;
    coffeeImage.alt = image.altText;

    // const coffeeTitle =document.createElement("h2");
    // coffeeTitle.classList.add("coffee-title");
    // coffeeTitle.textContent = title;

    const coffeeTitle = buildTextElement("h2","coffee-title",title);


    // const coffeePrice = document.createElement("h3");
    // coffeePrice.classList.add("coffee-price");
    // coffeePrice.textContent =`${price}`;
    coffeePrice = buildTextElement("h3","coffee-price",`${price}`);

    const coffeeDescription = document.createElement("p");
    coffeeDescription.classList.add("coffee-description");
    coffeeDescription.textContent = description;

  
    coffeeArticle.appendChild(coffeeTitle);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);

    document.body.appendChild(coffeeArticle);
    //console.log(coffee);
});//end of coffee foreach method

