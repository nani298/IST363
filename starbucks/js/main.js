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

const coffees = [
    {
        name:"Mocha",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
     {
        name:"Latte",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
     {
        name:"Esspresso",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }

    },
    {
        name:"Mocha",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
     {
        name:"Latte",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
     {
        name:"Esspresso",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
    {
        name:"Mocha",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
     {
        name:"Latte",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
     {
        name:"Esspresso",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
    {
        name:"Mocha",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
     {
        name:"Latte",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },
     {
        name:"Esspresso",
        price:3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName:"coffee.jpg",
            width:630,
            height:630,
            altText:"A cup of coffee"
        }
    },


];
//console.log(coffees[0]);

coffees.forEach(function(coffee) {
    const {name,price,description,image}=coffee;

    const coffeeArticle = document.createElement("article");

    const coffeeImage = document.createElement("img");
    coffeeImage.src =`images/${image.fileName}`;
    coffeeImage.width = image.width;
    coffeeImage.height =image.height;
    coffeeImage.alt = image.altText;

    const coffeeName = document.createElement("h2");
    coffeeName.textContent = name;

    const coffeePrice = document.createElement("h3");
    coffeePrice.textContent = price;

    const coffeeDescription = document.createElement("p");
    coffeeDescription.textContent = description;

    coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeName);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);

    document.body.appendChild(coffeeArticle);
    //console.log(coffee);
});//end of coffee foreach method

