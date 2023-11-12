// feet to inch
function feetToInch(feet) {
    return feet * 12;
}
console.log('Feet to Inch ' + feetToInch(10))

//centimeter to meter
function centimeterToMeter(centimeter) {
    return centimeter / 100;
}
console.log('Centimeter to Meter ' + centimeterToMeter(1100))

// paper requirement
function paperRequirement(firstBookPrintNumber, secondBookPrintNumber, thirdBookPrintNumber) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const totalPrice = (firstBookPage * firstBookPrintNumber) + (secondBookPage * secondBookPrintNumber) + (thirdBookPage * thirdBookPrintNumber);
    return totalPrice;
}
console.log('total page requirement ' + paperRequirement(2, 2, 2))

//best friend 
const friends = ['Asif', 'Tareq', 'Nayeem', 'Shohag', 'Mynul Islam', 'Jhir', 'Sisir']
function bestFriend(arr) {
    let maxLengthName = friends[0];
    for (friend of arr) {
        if (friend.length > maxLengthName.length) {
            maxLengthName = friend;
        }
    }
    return maxLengthName;
}
console.log('Max Length Name ' + bestFriend(friends))

// only positive;
const numberList = [20, 40, 51, 80, 500, -30, 70];
function onlyPositive(arr) {
    const positiveList = [];
    for (let number of arr) {
        if (number >= 0) {
            positiveList.push(number);
        }else{
            break;
        }
    }
    return positiveList;
}
console.log('Only before finish positive '+onlyPositive(numberList));

// only positive number
function onlyPositiveNumber(arr) {
    const positiveList = [];
    for (let number of arr) {
        if (number >= 0) {
            positiveList.push(number);
        }
    }
    return positiveList;
}
console.log('Only positive Number '+onlyPositiveNumber(numberList));
