// video outline 

// learn how to write an arrow function 

// arrow function syntax 
const caldulatedAverage = (a,b) => {
    return(a + b)/2;
}
console.log(calculatedAverage(4,27))

const addTen = (num) => {
    return num + 10;
}

console.log (addTen(36));

// review forEach array method

// const beatles = ['Paul','George','Ringo','John'];
// beatles.forEach((beatle) =>{ 
//     console.log({beatle});
// });


// review sort array method 
//beatles.sort();
//console.log({beatles});

// const sortedBeatles = [...beatles].sort(() => {
//     console.log({a,b});

//     if (a > b) {
//         return -1;
//     }
// });//sort method end 

//console.log({sortedBeatles})

const beatles = [
    {
        name:"Paul",
        age: 78
    },
    {
        name:"George",
        age: 75
    },
    {
        name:"Ringo",
        age: 80
    },
    {
        name:"Jhon",
        age: 40
    }

];

const sortedBeatlesByAge = [...beatles].sort((a,b) => {
    console.log({a,b});
    if (a.age > b.age) {
        return -1;
    }
});

console.log({sortBeatlesByAge});
// finish the sort funcionality 