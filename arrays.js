// I've invited you to fill out a form:
// Arrays
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

let  arr1 = [3,7,34,90,12];
let endElement = arr1[arr1.length -1];
console.log(endElement)

let arr2 = [true, "green", "where",12,56];
let lastElement = arr2[arr2.length -1];
console.log(lastElement);

// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];

let myPets = ["Cow", "Bird", "Snake", "Dog"];
let program = myPets.join(", ");
console.log(program);

// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let numArr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(numArr3);

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
            // "orange", "mango", "mango"];

let varfruits = ["apple", "mango", "apple","orange", "mango", "mango"];
function filter(fruits){
    return fruits.remove((item,index)=>fruits.indexOF(item)===index)
}
console.log(filter(varfruits))
let duplicateArray = varfruits.remove((Element,index) => fruits.indexOF(Element) !==index);
console.log(filter(varfruits));

// Write a JS script to search for the following word in the array.
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
let search =  "we"
if (arr5.includes = (search)){
    console.log(search)
}
else{
    console.log("the search word was not found")
}

// Write a JS script to sort the following string
// let word = "sevink"
 let word = "sevink"
word.sort("sevink")
console.log(word);

