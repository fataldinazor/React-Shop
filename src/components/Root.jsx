import {useState, useReducer} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import {CartContext} from "../context/cartContext"
import cartItemReducer, { initialState } from '../reducer/reducer'

function Root() {
  const [cartItems, dispatch]= useReducer(cartItemReducer, initialState)

  function addNewProductToCart(product) {
    dispatch({
      type: "add_item",
      product: product,
    });
  }
  
  function increaseProductQuantity(product) {
    dispatch({
      type: "increase_qty",
      product: product,
    });
  }
  
  function reduceProductQuantity(product) {
    dispatch({
      type: "reduce_qty",
      product: product,
    });
  }
  
  function removeItem(product) {
    dispatch({
      type: "remove_item",
      product: product,
    });
  }
  
  function emptyCart() {
    dispatch({
      type: "empty_cart",
    });
  }

  function isItemPresent(product) {
    return cartItems.some(item=>product.id===item.id);
  }

  function getItemQty(product) {
    const item = cartItems.find((item) => item.id === product.id);
    return item ? item.value : 0;
  }


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
