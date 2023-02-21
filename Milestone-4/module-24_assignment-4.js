// This function take a number and return with few arithmetic operations;
function mindGame(number) {
    if (typeof (number) !== 'number') {
        console.log('Invalid Input');
        return;
    }
    return ((number * 3) + 10) / 2 - 5;
}

// mindGame(2.3)
// This fun take string as parameter return if this string length even or odd
function evenOdd(giveString) {
    if (typeof (giveString) !== 'string') {
        console.log('Invalid Input Need to give String');
        return;
    }
    if (giveString.length % 2 == 0) {
        return 'even'
    }
    return 'odd'
}

// Check if difference 7 .if difference less than 7 return the difference if grater than 7 return 2*number with it's absolute value  
function isLGSeven(number) {
    if (typeof (number) !== 'number') {
        console.log('Invalid Input');
        return;
    }
    const difference = number - 7;
    if (difference < 7) {
        return difference;
    } else {
        return number * 2
    }
}

//count the negative value in array and return it 
function findingBadData(givenArray) {
    if (!Array.isArray(givenArray)) {
        console.log('Invalid Input');
        return;
    }
    let badDataCount = 0;
    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

//given friend gem power and friend gems return the total gems power of the 3 friends 
function gemsToDiamond(firstFndGem, secondFndGem, thirdFndGem) {
    if (typeof (firstFndGem) !== 'number' || typeof (secondFndGem) !== 'number' || typeof (thirdFndGem) !== 'number') {
        console.log('Invalid Input');
        return;
    }
    const firstFndGemPower = 21;
    const secondFndGemPower = 32;
    const thirdFndGemPower = 43;
    const totalGemPower = firstFndGem * firstFndGemPower + secondFndGem * secondFndGemPower + thirdFndGem * thirdFndGemPower;
    if (totalGemPower < 2000) {
        return totalGemPower;
    } else {
        return totalGemPower - 2000;
    }
}

// regex
const shakil=(string)=>{
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    return regex.test(string)
}

 console.log(shakil('yY6%hjyg'))