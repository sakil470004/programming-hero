function factorial(i) {
    if (i == 1) {
        return 1;
    }
    else {
        return i * factorial(i - 1);

    }
}
/*for 5
5*factorial(4)
5*4*factorial(3)
5*4*3*factorial(2)
5*4*3*2*factorial(1)
5*4*3*2*1
*/
console.log(factorial(5));

// use like for
function sum(i) {
    if (i == 1) {
        return 1;
    } else {
        return i + sum(i - 1);
    }
}
/*For 5
5+sum(4) 
5+4+sum(3) 
5+4+3+sum(2) 
5+4+3+2+sum(1) 
5+4+3+2+1 
*/
console.log(sum(5))

const products = [
    { id: 1, name: 'Xaomi A2 lite', price: 19000 },
    { id: 2, name: 'Samsung s3', price: 10000 },
    { id: 3, name: 'Samsung A51', price: 21000 },
    { id: 4, name: 'Samsung Prime', price: 15000 },
    { id: 5, name: 'Samsung Due 2', price: 10000 },
    { id: 6, name: 'Xaomi Redmi note 5', price: 17000 },
    { id: 7, name: 'Xaomi Redmi note 5 pro', price: 18000 },
    { id: 8, name: 'Nokia A5', price: 1000 },
    { id: 9, name: 'Nokia Dama', price: 2000 },
]
function matchedProduct(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
    return matched;
}
console.log(matchedProduct(products, 'samsung'))