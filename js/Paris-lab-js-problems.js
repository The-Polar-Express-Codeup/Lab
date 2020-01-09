
//source-- assessment 2;
// 10. Write a function named `isPalindrome` that takes in a single input. If the input is a numeric string, then return `false`. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
//
// isPalindrome("Bob")         // true
// isPalindrome("radar")       // true
// isPalindrome("ufotofu")     // true
// isPalindrome("Monday")      // false
// isPalindrome(232)           // false
// isPalindrome(null)          // false

// function isPalindrome(input) {
//     if(!isNaN(parseFloat(input))) {
//         return false;
//     }else if(typeof input !== "string"){
//         return false;
//     }else{
//         var reverse = (input.split("").reverse().join("").toLowerCase());//I had these in the wrong order//
//         return reverse === input.toLowerCase();
//     }
//
// }
// console.log(isPalindrome("Bob"));

//*********************java script 101 problems***************************//
//94.
// function highestPriceBook(objects) {
//     const highestPriceBook = {
//         "title": "",
//         "price": 0,
//         "author": ""
//     }
//     for (let i=0; i <objects.length; i++) {
//         if (highestPriceBook.price < objects[i].price) {
//             highestPriceBook.title = objects[i].title;
//             highestPriceBook.price = objects[i].price;
//             highestPriceBook.author = objects[i].author;
//         }
//     }
//     console.log(highestPriceBook);
//     return highestPriceBook;
// }

//******************************edabit*****************************//
//source https://edabit.com/challenge/nhXofMMyrowMyr9Nv  //
// function nextEdge(side1, side2) {
//     if(side1 > 0 && side2 > 0) {
//         return (side1 + side2) - 1;
//     }else {
//         return;
//     }
// }
//
// console.log(nextEdge(8,4));

//************************************* javaScript 101 exercises **************************//

// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array
function lowestPriceBook(obj){
    let leastExpensiveBook = false;
    for(let i = 0; i < obj.length; i++){
        if(!leastExpensiveBook || obj[i].price < leastExpensiveBook.price){
            leastExpensiveBook = obj[i];
        }
    }
    return leastExpensiveBook
}

// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity

function getAverageSpentPerItem(shoppingCart){
    let totalPrice = 0;
    let totalQuantity = 0;
    for(let i = 0; i < shoppingCart.items.length; i++){
        totalPrice += (shoppingCart.items[i].price * shoppingCart.items[i].quantity);
        totalQuantity += shoppingCart.items[i].quantity;
    }
    return(totalPrice / totalQuantity);
}

// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
function mostSpentOnItem(obj){
    let mostExpensiveItem = false;
    for(let i = 0; i < obj.items.length; i++){
        if(!mostExpensiveItem || (obj.items[i].price * obj.items[i].quantity) > (mostExpensiveItem.price * mostExpensiveItem.quantity)){
            mostExpensiveItem = obj.items[i];
        }
    }
    return mostExpensiveItem;
}