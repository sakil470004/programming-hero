const productNameField = document.getElementById('product_name');
const productQuantityField = document.getElementById('product_quantity');

document.getElementById('btn_add_proudct').addEventListener('click', function () {
    const productName = productNameField.value;
    const productQuantity = productQuantityField.value;
    productNameField.value = ''
    productQuantityField.value = ''
    displayProduct(productName, productQuantity)
    sendToLocalStorage(productName, productQuantity)
})
const displayProduct = (productName, productQuantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${productName} : ${productQuantity}`
    productContainer.appendChild(li)
}
const sendToLocalStorage = (productName, productQuantity) => {
    const carts = getStoredCart();
    carts[productName] = productQuantity;
    const cartStringified = JSON.stringify(carts);
    localStorage.setItem('cart', cartStringified);
}
const getStoredCart = () => {
    let carts = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        carts = JSON.parse(storedCart)
    }
    return carts;
}
const displayProductFromLocalStorage = () => {
    const carts = getStoredCart();
    for (const cart in carts) {
        const value = carts[cart]
        displayProduct(cart, value)
    }
}
displayProductFromLocalStorage()

// 2nd task
document.getElementById('btn-increase').addEventListener('click', function () {
    const displayElement = document.getElementById('p-value');
    const value = parseInt(displayElement.innerText);
    displayElement.innerText = value + 1;
    saveToLocalStorage(value + 1);
})
const saveToLocalStorage = (currentCount) => {
    localStorage.setItem('count', currentCount)
}
const readFromLocalStorage = () => {
    const displayElement = document.getElementById('p-value');
    const value = localStorage.getItem('count');
    if (value) {
        displayElement.innerText = value;
    }
}
readFromLocalStorage()