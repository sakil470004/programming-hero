const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },

}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const physics=student['marks'][`physics`]
const subject = 'math';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];
const sub='math';
const mathMark=student.marks[sub];
console.log(mathMark,physics);