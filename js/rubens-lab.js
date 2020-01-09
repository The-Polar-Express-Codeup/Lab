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



// find out if the number of "x" is equal to the number of "o"
function XO(str) {
    str = str.toLowerCase();
    var arrayOfCharacters = str.split("");
    var countX = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'x');
    }, 0);
    var countO = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'o');
    }, 0);
    if ( countX == countO ) {
        return true;
    } else {
        return false;
    }
}

Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);

// how many times till you have just one number left

function persistence(num) {
    //set multiplyCount equal 0
    //turn the number into an array of nums
    //while the length of the array is more than 1
    //multiply each digit together
    //the product becomes the new arr
    //return multiplyCount

    var arr = num.toString().split("");
    var multiplyCount = 0;
    var product;
    while (arr.length > 1) {
        product = arr.reduce(function(a, b) {
            return a * b;
        });
        multiplyCount++;
        arr = product.toString().split("");
    }
    return multiplyCount;
}

persistence(39); // 3
persistence(999); // 4
persistence(4); // 0


describe('Initial Tests', function () {
    Test.assertEquals(persistence(39),3);
    Test.assertEquals(persistence(4),0);
    Test.assertEquals(persistence(25),2);
    Test.assertEquals(persistence(999),4);
});
