"use strict";

// alert("Connected!");

// TODO Source: https://edabit.com/challenge/5vAX6Lw2Yrgdkx7Qi
// TODO Problem 1: Is the Word Singular or Plural?
// TODO Description: Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(word) {
    if (word.charAt(word.length-1) === "s"){
        return true
    } else {
        return false;
    }
}

// console.log("Is the word 'codes' plural, true or false? " + isPlural("codes"));
// console.log("Is the word 'right' plural, true or false? " + isPlural("right"));
// console.log("Is the word 'strings' plural, true or false? " + isPlural("strings"));

//=====================================================//

// TODO Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php#EDITOR
// TODO Problem 3: Sign of the Product of Three Numbers
// TODO Description: Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.



function signOfThreeAddedNumbers(x, y, z){
    if ((x + y + z) < 0){
        return "The sign is negative '-'";
    } else if ((x + y + z) > 0) {
        return "The sign is positive '+'";
    } else if ((x + y + z) === 0) {
        return "The sign is neither '+' or '-' since the result was 0";
    } else {
        return "Whoops something went wrong..."
    }
}

// alert(signOfThreeAddedNumbers(5, 5, -10));
// alert(signOfThreeAddedNumbers(5, -6, -7));
// alert(signOfThreeAddedNumbers(5, 10, -10));

//=====================================================//

// TODO Source:https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php#EDITOR
// TODO Problem 3: Check if Current Number is Odd or Even
// TODO Description: Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (var i = 0; i <= 15; i++){
    if (i % 2 === 0){
        console.log(i + " is even");
    } else if (i % 1 === 0){
        console.log(i + " is odd");
    }
}







