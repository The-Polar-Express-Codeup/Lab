// Write a function that takes in a string variable and returns that string reversed.
// While most languages provide their own built-in functions to do this,
// the point of this challenge is to write your own.

function revNumbers (str){
    // return str.split("").reverse().join("");
    return str.split(" ").reverse().join(" ");
}
console.log(revNumbers("the dog is brown"));
console.log(revNumbers("1, 2, 3, 4, 5, "));

// Sum Up Those Digits
// Create a function that will:
//
//     Accept any number as input.
//     Validate that input and convert it to an integer as necessary.
//     Return the sum of the individual digits of that integer.

// sums to 100
var numbers = [10, 20, 30, 40];
function countNumbers() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}
console.log(countNumbers());

// Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num up to length.
// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

function arrayOfMultiples (num, length) {
    var result = [];
    for (let i = 1; i <= length; i++) {
        result.push(num*i)

    }
    return result;
}

console.log(arrayOfMultiples(4,9));