const oddArray = [1, 3, 5, 7, 9];
const evenArray = oddArray.map(num => num + 1)
console.log(evenArray)

const randomArray = [33, 50, 79, 78, 90, 101, 30]
const filteredArray = randomArray.filter(num => num % 10 === 0)
const findNumber = randomArray.find(num => num % 10 === 0)
console.log(randomArray, filteredArray, findNumber);