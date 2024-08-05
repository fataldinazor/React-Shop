import {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import {CartContext} from "../context/cartContext"

function Root() {
  const [cartItems, setCartItems]=useState([]);

  function increaseProductQuantity(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const updatedCartItems = [...cartItems];

    updatedCartItems[index] = {
      ...updatedCartItems[index],
      value: updatedCartItems[index].value + 1,
    };
    setCartItems(updatedCartItems);
  }

  function emptyCart(){
    setCartItems([]);
  }

  function reduceProductQuantity(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const value = cartItems[index].value;
    const updatedCartItems = [...cartItems];
    if (value > 1)
      updatedCartItems[index] = {
        ...updatedCartItems[index],
        value: updatedCartItems[index].value - 1,
      };
    setCartItems(updatedCartItems);
  }

  function addNewProductToCart(product) {
    const newProduct = { id: product.id, product, value: 1 };
    setCartItems((prevItems) => [...prevItems, newProduct]);
  }

  function isItemPresent(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index > -1) return true;
    else return false;
  }

  function getItemQty(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    console.log(index);
    const qty = cartItems[index].value;
    return qty;
  }

  const removeItem = (product) => {
    const updatedArray = [...cartItems];
    const index = updatedArray.findIndex((item) => item.id === product.id);
    updatedArray.splice(index, 1);
    setCartItems(updatedArray);
  };

  return (
    <div className='h-screen flex flex-col '>
      <CartContext.Provider value={{cartItems, addNewProductToCart,increaseProductQuantity, reduceProductQuantity, getItemQty, isItemPresent, removeItem, emptyCart}}>
      <Header />
      <Outlet />
      </CartContext.Provider>
    </div>
  )
}

export default Root
