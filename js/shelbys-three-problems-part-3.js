// Create a function that takes an array of students and returns an array of student names.

function getStudentNames(students) {
    var nameArray = students.map(function (el) { return el.name; });
    return nameArray;
}

console.log(getStudentNames([
    {name: "Steve"},
    {name: "Mike"},
    {name: "John"}
])); // ➞ ["Steve", "Mike", "John"]

// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(start) {
    var array = [];
    for(i = start; i>=0; i--){
        array.push(i);
    }
    return array;
}

console.log(countdown(5)); // ➞ [5, 4, 3, 2, 1, 0]
console.log(countdown(1)); // ➞ [1, 0]
console.log(countdown(0)); // ➞ [0]

// Create a function to calculate the determinant of a 2 x 2 matrix. The determinant of the following matrix is: ad - bc:

//[[a, b], [c, d]]

function calcDeterminant(matrix) {
    return (matrix[0][0]*matrix[1][1])-(matrix[0][1]*matrix[1][0]);
}

console.log(calcDeterminant([
    [1, 2],
    [3, 4]
])); // ➞ -2

console.log(calcDeterminant([
    [5, 3],
    [3, 1]
])); // ➞ -4

console.log(calcDeterminant([
    [1, 1],
    [1, 1]
])); // ➞ 0