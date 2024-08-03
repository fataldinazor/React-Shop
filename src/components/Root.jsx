import {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Root() {
  const [cartItems, setCartItems]=useState([]);
  return (
    <div className='h-screen flex flex-col '>
      <Header cartItems={cartItems} />
      <Outlet context={[cartItems, setCartItems]}/>
    </div>
  )
}

export default Root
