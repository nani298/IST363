// create variables for the button s


const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");
const coffeeList =document.getElementById("coffeeList");

const purgeList = () => {
    cofffeeList= innerHTML ="";
}
const sortListByDirection = (direction,arr) => {
    //console.log ({direction});
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

function buildTextElement(element,className, content){
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}

const displayList = (arr) => {
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
ascendingBtn.addEventListener("click",function() {
    console.log("ascending button has been clicked");
    purgeList();
    const sortedList = sortListByDirection("ascending",coffees);
    displayList(sortedList);
    //console.log(sortedList);
});
decendingBtn.addEventListener("click",function() {
    console.log("descending button has been clicked");
    purgeList();
    const sortedList = sortListByDirection("descending",coffees);
    displayList(sortedList);
    //console.log(sortedList);
});

displayList(coffees);
// purge the coffee list

// sort the coffee list by direction

// loop through the sorted array and display the coffee list 