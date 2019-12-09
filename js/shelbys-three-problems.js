// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

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