const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '017176588899',
    price: 4000
}
const { price, color } = fish;
console.log(price, color)

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
const array500 = ['Tamanna', 'Dhaka', '0176333', '6.7', 'AB+'];
const [userName, userAddress, userPhone, ...rest] = array500;
console.log(userName, userAddress, userPhone,rest);
const { phone } = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const { age, name } = { name: 'Almas', age: 56, profession: 'makeup artist' }
console.log(age);

const { address } = fish;
console.log(address);

// array destructuring
const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames() {
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);
