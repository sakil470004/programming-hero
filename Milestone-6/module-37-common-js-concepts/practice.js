//false
console.log([] == 'true')
console.log([] === [])
console.log(true === 'true')
const checkNaN = (number) => {
    if (isNaN(number)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNaN("wwd"))
console.log(checkNaN("10"))
console.log(checkNaN(10))

let storeFalsyValue = false;
if (storeFalsyValue) {
    console.log('Nothing to show!')
} else {
    console.log('You are amazing')
}
const calculator = (number1, number2, operation) => {
    let result;
    if (operation === 'add') {
        result = number1 + number2;
    } else if (operation === 'subtract') {
        result = number1 - number2;
    } else if (operation === 'divide') {
        result = number1 / number2
    }
    else if (operation === 'multiply') {
        result = number1 * number2
    }
    else if (operation === 'modulus') {
        result = number1 % number2
    } else {
        return ("Invalid Operation")
    }
    return result;
}
console.log(calculator(6,7,'add'))
console.log(calculator(6,7,'subtract'))
console.log(calculator(6,7,'multiply'))
console.log(calculator(6,7,'divide'))
console.log(calculator(6,7,'modulus'))
console.log(calculator(6,7,'--'))