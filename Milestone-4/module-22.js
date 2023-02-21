// find the max value between two value;
function findMax(number1, number2) {
    if (number1 > number2) {
        return number1
    }
    return number2;
}
// find max from 3 number
// method 1
let a = 3, b = 4, c = 5;
Math.max(a, b, c);
// method 2;
function findMaxFrom3Number(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    }
    return c;
}
console.log(findMaxFrom3Number(4, 5, 6))

// find the min number of 3 number
// method one
Math.min(a, b, c);
function findMinFrom3Number(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    }
    return c;
}
console.log(findMinFrom3Number(4, 5, 6))

// max in array
function maxNumberInArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const array = [10, 2, 6,13, 4, 6, 7 , 12, 14];
console.log(maxNumberInArray(array));

// min in array;
function minNumberInArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minNumberInArray(array))

// fibo
const fibo = [0, 1];
for (let i = 2; i <= 25; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// return rectangular area
function rectangularArea(length, width, height) {
    return length * width * height;
}

// return 2nd largest number in array 
// method 1
function secondLargestInArray(arr) {
    const newArray = [...arr];
    newArray.sort(
        function (a, b) { return a - b }
    );
    return newArray[newArray.length - 2]
}
console.log(array)
console.log(secondLargestInArray(array));

//method 2
function secondLargestInArray2(arr) {
    let max = arr[0];
    let secondMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];

        } else if (arr[i] < max && arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(secondLargestInArray2(array));

