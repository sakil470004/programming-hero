const oddArray = [1, 3, 5, 7, 9];
const evenArray = oddArray.map(num => num + 1)
console.log(evenArray)

const randomArray = [33, 50, 79, 78, 90, 101, 30]
const filteredArray = randomArray.filter(num => num % 10 === 0)
const findNumber = randomArray.find(num => num % 10 === 0)
console.log(randomArray, filteredArray, findNumber);

const randomArray2 = [1, 9, 17, 22];
let sum = 0;
randomArray2.forEach(num => sum = num + sum);
const sum2 = randomArray2.reduce((previous, current) => previous + current, 0)
console.log(sum, sum2);

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Tamanna', age: 22 },
]
let ageSum = 0;
people.forEach(user => ageSum = user.age + ageSum)
const ageSum2 = people.reduce((prev, current) => prev + current.age, 0)
console.log(ageSum, ageSum2);

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
console.log(user.email, user?.address, user?.address?.city, user?.address?.geo?.lat,user?.company?.name)