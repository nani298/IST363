


const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

const sortBtn = document.getElementById("sortBtn");
const coffeeList = document.getElementById("coffeeList");
const priceRanges = document.getElementById("priceRanges");

let filteredCoffees = [...coffees];
let sortDirection = "descending";


const buildTextElement = (element, className, content) => {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}
const displayList = (arr) => {
    purgeList();
    arr.forEach((coffee) => {
        
        const { title, price, description, image } = coffee;
    
        
        const coffeeArticle = document.createElement("article");
        coffeeArticle.classList.add("collection__item");
    
        const coffeeImage = document.createElement("img");
        coffeeImage.classList.add("collection__item__image");
        coffeeImage.src = `images/${image.fileName}`;
        coffeeImage.width = image.width;
        coffeeImage.height = image.height;
        coffeeImage.alt = image.altText;
    
        const coffeeTitle = buildTextElement("h3", "collection__item__title", title);
       
    
        
        coffeeArticle.appendChild(coffeeImage);
        coffeeArticle.appendChild(coffeeTitle);
       
    
       
        coffeeList.appendChild(coffeeArticle);
    }); // end of coffees forEach method
} // displayList function end
const getFilteredCoffees = (minValue, maxValue) => {
    const filteredArr = coffees.filter((coffee) => {
        const { price } = coffee;
        return price >= minValue && price <= maxValue;
    });
    
    return filteredArr;
}
const purgeList = () => {
    coffeeList.innerHTML = "";
}
const sortListByDirection = (direction, arr) => {
    
    sortDirection = direction;
    const sortedListArr = [...arr].sort((a,b) => {
        if (direction === "descending") {
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


menuBtn.addEventListener("click", function() {
    
    overlay.classList.add("active");
}); // end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
}); // end of closeBtn click event

let isDescending = true;

sortBtn.addEventListener("click", () => {
    
    isDescending = !isDescending;

    let direction = isDescending ? "descending" : "ascending";
    const sortedList = sortListByDirection(direction, filteredCoffees);
    displayList(sortedList);

    
    sortBtn.innerHTML = "";
    
    
    const sortBtnIcon = document.createElement("img");
    sortBtnIcon.src = `images/arrow-${direction}.svg`;

    
    sortBtn.appendChild(sortBtnIcon);
});



priceRanges.addEventListener("change", (event) => {
    console.log("price range has been changed");
    console.log(event.target.value);
    const selectedRange = event.target.value;

    if (selectedRange === "all") {
        filteredCoffees = sortListByDirection(sortDirection, [...coffees]);
    } else {
        
        const [minValue, maxValue] = selectedRange.split("-");
        
        const tempFilteredCoffees = getFilteredCoffees(minValue, maxValue);
        filteredCoffees = sortListByDirection(sortDirection, tempFilteredCoffees);
    } // end of conditional
    displayList(filteredCoffees);
}); // end of priceRanges change event


const sortedStarterList = sortListByDirection(sortDirection, filteredCoffees);
displayList(sortedStarterList);