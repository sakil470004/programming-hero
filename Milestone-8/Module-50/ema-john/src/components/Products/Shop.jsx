import React, { useEffect, useState } from 'react'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

function Shop() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const handleAddToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart=[];
    const exist=cart.find(pd=>pd.id===product.id);
    if(!exist){
      product.quantity=1;
      newCart=[...cart,product];
    }else{
      exist.quantity=exist.quantity+1;
      const remaining=cart.filter(pd=>pd.id!==exist.id);
      newCart=[...remaining,exist];
    }
    setCart(newCart)
    addToDb(product.id)
  }

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    const storedCart = getShoppingCart();
    // step 1:get Id
    const savedCart=[];
    for (const id in storedCart) {
      // step 2 :get cart
      const addedProduct = products.find(product => product.id === id);
      // step 3 get quantity of product
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart)
  }, [products])
  return (
    <div className='products'>
      <div className="card-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <Cart cart={cart}>

      </Cart>
    </div>
  )
}

export default Shop