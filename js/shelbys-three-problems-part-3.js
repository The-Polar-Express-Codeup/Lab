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

// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str) {
    return str.split(" ").length;
}


console.log(countWords("This is a test")); // ➞ 4
console.log(countWords("What an easy task, right")); // ➞ 5
console.log(countWords("Just an example here move along")); // ➞ 6

