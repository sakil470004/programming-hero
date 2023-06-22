// height
function inchToFeet(inch) {
    return inch / 12;
}
console.log("inch to feet " + inchToFeet(84));
// Miles to km
function milesToKm(miles) {
    return miles * 1.60934;
}
console.log("Miles to km " + milesToKm(84));

// find the odd sum array
function oddSumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            sum += arr[i];
        }
    }
    return sum;
}
const array = [10, 5, 3, 8];
console.log('odd sum array ' + oddSumArray(array));

// hour to minutes
function hourToMinutes(hour) {
    return hour * 60;
}
console.log('Hour to minutes ' + hourToMinutes(12))

// find leaf year on an array;
function findLeapYearFromArray(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 400 === 0 || (arr[i] % 4 === 0 && arr[i] % 100 !== 0)) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
const years = [2023, 2024, 2025, 2026, 1600, 2000, 1700, 1900];
console.log('leaf year ' + findLeapYearFromArray(years))

// factorial
function factorialWhile(number) {
    let i = 1;
    let sum = 1;
    while (i <= number) {
        sum *= i;
        i++;
    }
    return sum;
}
console.log("factorial while " + factorialWhile(6))

function factorialFor(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum *= i;
    }
    return sum;
}
console.log("factorial for " + factorialFor(6))
