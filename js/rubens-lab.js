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