// s=(a+b+c)/2  a=sqrt(s*(s-a)(s-b)(s-c))
// area of triangle
function triangleArea(a, b, c) {
    // find s
    let s = (a + b + c) / 2;
    // find a
    let A = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return A;
}
console.log(triangleArea(3.25, 2.16, 5.09));

function isPrime(number) {
    if (number == 0 || number == 1) {
        return false;
    }
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(1))

// use of slice and splice
const friends = [10, 293, 92, 29, 21, 39, 30, 43, 42, 543, 21];
console.log(friends)
console.log(friends.slice(2, 5));
console.log(friends)
console.log('splice--------------')
console.log(friends.splice(2, 5, 20, 20, 20));
console.log(friends)

// ticket problem
console.log('ticket problem--------------------')
function ticketPrice(ticket) {
    const first100Price = 100;
    const second100Price = 90;
    const third100Price = 70;
    let totalPrice = 0;
    if (ticket <= 100) {
        totalPrice = first100Price * ticket;
    } else if (ticket <= 200) {
        totalPrice = (100 * first100Price) + (ticket - 100) * second100Price;
    } else {
        totalPrice = (100 * first100Price) + (100 * second100Price) + (ticket - 200) * third100Price;
    }
    return totalPrice;
}
console.log('The Total ticket Price : ' + ticketPrice(201))

