"use strict";

// alert("Connected!");

// TODO Source: https://edabit.com/challenge/Q3n42rEWanZSTmsJm
// TODO Problem 1: Find the Smallest and Biggest Numbers
// TODO Description: Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    var returnArr = [];
    var min = arr[0];
    var max = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    returnArr.push(min);
    returnArr.push(max);
    return returnArr;
}

// console.log(minMax([14, 35, 6, 1, 34, 54]));
// console.log(minMax([17, 23, 3, 9, 24, 97]));
// console.log(minMax([0, 3, 10, 17, 38, 57]));

//=====================================================//

// TODO Source: https://edabit.com/challenge/b2NdDSdkjqFnCTfS8
// TODO Problem 3: Filter out Strings from an Array
// TODO Description: Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.

function filterArray(arr) {
    var returnArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number") {
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}

// console.log(filterArray([1, 2, "a", "b"]));
// console.log(filterArray([4, "z", "f", 5]));
// console.log(filterArray([1, "a", "b", 15]));

//=====================================================//

// TODO Source:https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php#EDITOR
// TODO Problem 3: Spelling it Out
// TODO Description: Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
    let newArr = [];
    for(let i = 1; i <= str.length; i++){
        newArr.push(str.slice(0, i));
    }
    return newArr;
}

// console.log(spelling("happy"));
// console.log(spelling("evening"));
// console.log(spelling("howdy"));







