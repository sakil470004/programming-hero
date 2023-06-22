const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        resolve({ num: 566665 });
    }
    else {
        reject('No data available')
    }
})

getData
    .then(data => console.log(data.num + 22))
    .catch(err => console.error('ERR:', err))

const createData = new Promise((resolve, reject) => {
    const arr = [];
    const number = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < number; i++) {
        const newNumber = Math.floor(Math.random() * 10) + 1;

        arr.push(newNumber)
    }
    if (arr.length % 2 === 0) {
        resolve({ data: arr })
    } else {
        reject('You have no power to hold array')
    }
})
createData
    .then(data => console.log(data))
    .catch(err => console.error('ERR', err))