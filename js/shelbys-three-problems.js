// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

function isInRange(num, range) {
    return (num >= range.min && num <= range.max);
}

console.log(isInRange(4, { min: 0, max: 5 })); // true
console.log(isInRange(4, { min: 4, max: 5 }));// true
console.log(isInRange(4, { min: 6, max: 10 })); // false
console.log(isInRange(5, { min: 5, max: 5 })); // true

// Source:https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

// You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wage of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

function programmers(one, two, three) {
    var people = [one, two, three];
    people = people.sort(function(a, b){return a-b});
    return people[people.length - 1] - people[0];
}

console.log(programmers(147, 33, 526)); //493
console.log(programmers(33, 72, 74)); //41
console.log(programmers(1, 5, 9)); //8

//Source: https://www.w3schools.com/jsref/jsref_sort.asp

// Create a function that takes an array of numbers and return the first and last elements as a new array.

function firstLast(arr) {
    return [arr[0], arr[arr.length - 1]];
}

console.log(firstLast([5, 10, 15, 20, 25])); // [5, 25]
console.log(firstLast(["edabit", 13, null, false, true])); // ["edabit", true]
console.log(firstLast([undefined, 4, "6", "hello", null])); // [undefined, null]

//Source:https://stackoverflow.com/questions/39967872/return-a-new-array-with-the-first-and-last-element-of-the-passed-array

