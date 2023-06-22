// problem 1
console.log('Problem   1')
var fruits = ['Apple', 'Banana', 'Orange'];
console.log("index of Banana " + fruits.indexOf('Banana'));
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits)

// problem 2
console.log('Problem 2')
var score = 40;
if (score >= 80) {
    console.log('A grade');
} else if (score >= 60) {
    console.log('B Grade');
}
else if (score >= 50) {
    console.log('C Grade')
}
else if (score >= 40) {
    console.log('D Grade')
} else {
    console.log('F grade')
}

// problem 3 
console.log('Problem 2')
// var a=13,b=79,c=45;
// var a=13,b=13,c=13;
var a = 113, b = 13, c = 13;
if (a > b && a > c) {
    console.log('a is largest ' + a);
}
else if (b > a && b > c) {
    console.log('b is largest ' + b);
}
else if (c > a && c > b) {
    console.log('c is largest ' + c);
} else {
    console.log('all are equal')
}

// part 2 problem 3
// var a = 9, b = 8, c = 9;
var a = 7, b = 8, c = 9;
if (a == b || b == c || c == a ){
    console.log('The triangle is Isosceles')
}else {
    console.log('The triangle is not Isosceles')

}