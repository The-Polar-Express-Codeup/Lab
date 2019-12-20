
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence
function onlyPositiveEvens(arr){
    var count = [];
    for (var i=0; i<arr.length; i++){
        if(arr[i] > 0 && arr[i] % 2 === 0){
            count.push(arr[i]);
        }
    }
    return count;
}
assert(onlyPositiveEvens([1, -2, 3]), [], "Exercise 77");
assert(onlyPositiveEvens([2, -5, -6]), [2], "Exercise 77");
assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6], "Exercise 77");
assert(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4], "Exercise 77");
addToDone("Exercise 77 is correct.");

// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
function hasEvens(arr) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 === 0) {
            return true;
        }
    }
    return false;
}


assert(hasEvens([1, 2, 3]), true, "Exercise 71");
assert(hasEvens([2, 5, 6]), true, "Exercise 71");
assert(hasEvens([3, 3, 3]), false, "Exercise 71");
assert(hasEvens([]), false, "Exercise 71");
addToDone("Exercise 71 is correct.");

// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
function countEvens(arr){
    var count = 0;
    for (var i=0; i<arr.length; i++)
        if(arr[i] % 2 ===0){
            count ++;
        }
    return count;
}
assert(countEvens([1, 2, 3]), 1, "Exercise 72");
assert(countEvens([2, 5, 6]), 2, "Exercise 72");
assert(countEvens([3, 3, 3]), 0, "Exercise 72");
assert(countEvens([5, 6, 7, 8]), 2, "Exercise 72");
addToDone("Exercise 72 is correct.");

// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence
function onlyPositiveEvens(arr){
    var count = [];
    for (var i=0; i<arr.length; i++){
        if(arr[i] > 0 && arr[i] % 2 === 0){
            count.push(arr[i]);
        }
    }
    return count;
}
=======
// Write a function that takes in a string variable and returns that string reversed.
// While most languages provide their own built-in functions to do this,
// the point of this challenge is to write your own.

function revNumbers (str){
    return str.split("").reverse().join("");
    // returns the array reversed along with each letter reversed aswell
    // return str.split(" ").reverse().join(" ");
//    return the array reversed with the words intact
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

console.log(arrayOfMultiples(5,5));

