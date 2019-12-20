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