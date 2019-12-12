
//source-- assessment 2;
// 10. Write a function named `isPalindrome` that takes in a single input. If the input is a numeric string, then return `false`. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
//
// isPalindrome("Bob")         // true
// isPalindrome("radar")       // true
// isPalindrome("ufotofu")     // true
// isPalindrome("Monday")      // false
// isPalindrome(232)           // false
// isPalindrome(null)          // false

function isPalindrome(input) {
    if(!isNaN(parseFloat(input))) {
        return false;
    }else if(typeof input !== "string"){
        return false;
    }else{
        var reverse = (input.split("").reverse().join("").toLowerCase());//I had these in the wrong order//
        return reverse === input.toLowerCase();
    }

}
console.log(isPalindrome("Bob"));

//*********************java script 101 problems***************************//
//94.
function highestPriceBook(objects) {
    const highestPriceBook = {
        "title": "",
        "price": 0,
        "author": ""
    }
    for (let i=0; i <objects.length; i++) {
        if (highestPriceBook.price < objects[i].price) {
            highestPriceBook.title = objects[i].title;
            highestPriceBook.price = objects[i].price;
            highestPriceBook.author = objects[i].author;
        }
    }
    console.log(highestPriceBook);
    return highestPriceBook;
}

//******************************edabit*****************************//
//source https://edabit.com/challenge/nhXofMMyrowMyr9Nv  //
function nextEdge(side1, side2) {
    if(side1 > 0 && side2 > 0) {
        return (side1 + side2) - 1;
    }else {
        return;
    }
}

console.log(nextEdge(8,4));