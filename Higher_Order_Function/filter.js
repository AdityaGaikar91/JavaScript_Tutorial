// filter --- filter out contents from an array based on some condition

const arr = [2, 3, 4, 5, 65, 6, 7];


const filteredArray = arr.filter(function even(num){
    return num % 2 == 0;
});
console.log(filteredArray);

const numGre5= arr.filter(num => num>=5)
console.log(numGre5);

const students = [
    {
        firstName: "Aditya",
        rollNumber: 4,
        marks: 96
    },
    {
        firstName: "Aditi",
        rollNumber: 5,
        marks: 34
    },
    {
        firstName: "Adi",
        rollNumber: 6,
        marks: 75
    }
]

const filteredStudent = students.filter(mark => mark = mark.marks > 50);

console.log(filteredStudent);
