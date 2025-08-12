// Print total marks for students with marks greater than 60 after 20 marks have been added to thosse who scored less than 60

const students = [
    {name:"Ankit", rollNumber:31, marks:78},
    {name:"Rahul", rollNumber:15, marks:97},
    {name:"John", rollNumber: 16, marks:25},
    {name:"Stephanie", rollNumber:7, marks:59}
];

// marks < 60 ---- add 20
// marks > 60 ---- add their total marks

const totalMarks = students.map(student => {
    if(student.marks<60){
        student.marks += 20;
    }
    return student;
}).filter(student => student.marks > 60).reduce(function (acc, curr) {
    return acc += curr.marks;  
}, 0);

// console.log(UpdatedMarks);

// const filteredMarks = UpdatedMarks.filter(student => student.marks > 60)
// console.log(filteredMarks);

// const totalMarks = filteredMarks.reduce(function (acc, curr) {
//     return acc += curr.marks;  
// }, 0)

console.log("Total Marks of Students greater then 60 is:",totalMarks);
