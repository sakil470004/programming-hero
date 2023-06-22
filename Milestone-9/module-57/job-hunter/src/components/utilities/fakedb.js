// use local storage to manage cart data
const addToDb = id => {
    let isAdded = false;
    let shoppingCart = getStoredCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
        isAdded = true;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('job-hunter', JSON.stringify(shoppingCart));
    return isAdded;
}

const removeFromDb = id => {
    const shoppingCart = getStoredCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('job-hunter', JSON.stringify(shoppingCart));
    }
}

const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-hunter');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('job-hunter');
}

export {
    addToDb,
    removeFromDb,
    getStoredCart,
    deleteShoppingCart
}
