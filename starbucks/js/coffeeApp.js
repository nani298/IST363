// create variables for the button s

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");
const coffeeList =document.getElementById("coffeeList");
const priceRanges = document.getElementById("priceRanges");

let filteredCoffees = [...coffees];
let sortDirection = "ascending";

const purgeList = () => {
    coffeeList.innerHTML ="";
}
const sortListByDirection = (direction,arr) => {
    //console.log ({direction});
    sortDirection = direction;
    const sortedListArr = [...arr].sort ((a,b) => {
        if (direction === "ascending") {
         if (a.title < b.title) {
            return -1;
         }  
        } else {
            if (a.title > b.title) {
                return -1;
            }
        }
    });
    return sortedListArr;
}

const buildTextElement = (element,className, content) => {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}

const displayList = (arr) => {
    purgeList();
    arr.forEach((coffee) => { 
        const {title,price,description,image}=coffee;
    
        const coffeeArticle = document.createElement("article");
        coffeeArticle.classList.add("coffee-item");
    
        // const coffeeArticle = document.createElement("article");
    
        const coffeeImage = document.createElement("img");
        coffeeImage.src =`images/${image.fileName}`;
        coffeeImage.width = image.width;
        coffeeImage.height =image.height;
        coffeeImage.alt = image.altText;
    
        // const coffeeTitle =document.createElement("h2");
        // coffeeTitle.classList.add("coffee-title");
        // coffeeTitle.textContent = title;
    
        const coffeeTitle = buildTextElement("h2","coffee-title",title);
        const coffeePrice = buildTextElement("h3","coffee-price",`$${price}`);
    
        // const coffeeDescription = document.createElement("p");
        // coffeeDescription.classList.add("coffee-description");
        // coffeeDescription.textContent = description;
        const coffeeDescription = buildTextElement("p","coffee-description",description);
    
        coffeeArticle.appendChild(coffeeImage);
        coffeeArticle.appendChild(coffeeTitle);
        coffeeArticle.appendChild(coffeePrice);
        coffeeArticle.appendChild(coffeeDescription);
    
    
        coffeeList.appendChild(coffeeArticle);
        //console.log(coffee);
    });//end of coffee foreach method
}// display list function end 

// create event listeners for the buttons 
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
});// end of menuBtn click event 

//start of closeBtn//
closeBtn.addEventListener("click",function() {
    overlay.classList.remove("active");
}); //end of closeBtn//

ascendingBtn.addEventListener("click",function() {
    console.log("ascending button has been clicked");
    //purgeList();
    const sortedList = sortListByDirection("ascending",filteredCoffees);
    displayList(sortedList);
    //console.log(sortedList);
});
decendingBtn.addEventListener("click",function() {
    console.log("descending button has been clicked");
    //purgeList();
    const sortedList = sortListByDirection("descending",filteredCoffees);
    displayList(sortedList);
    //console.log(sortedList);
});




priceRanges.addEventListener("change", (event) => {
    console.log("price range has been changed");
    console.log(event.target.value);
    const selectedRange = event.target.value;

    if(selectedRange === "all"){
       // purgeList();
        //displayList(coffees);
        filteredCoffees = sortListByDirection(sortDirection,[...coffees])
        //filteredCoffees = [...coffees]
    } else {
        const [minValue,maxValue] = selectedRange.split("-");
        console.log({minValue,maxValue});
        filteredCoffees = getfilteredCoffees(minValue,maxValue);
        //purgeList();
        
    }
    displayList(filteredCoffees);
    // console.log ({splitRange});
});

const getfilteredCoffees = (minValue,maxValue) => {
    const filteredArr = coffees.filter((coffee) => {
        const {price} = coffee;
        return price >= minValue && price <= maxValue;
    });
    console.log ({filteredArr});
    return filteredArr
}

const sortedStarterList = sortListByDirection (sortDirection,filteredCoffees);
displayList(sortedStarterList);
// purge the coffee list

// sort the coffee list by direction

// loop through the sorted array and display the coffee list 