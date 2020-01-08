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