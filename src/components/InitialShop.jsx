import { Outlet, useOutletContext } from 'react-router-dom'

function InitialShop() {
    const [cartItems,setCartItems]= useOutletContext();
  return (
    <div className='initial-shop flex-grow' >
      <Outlet context={[cartItems,setCartItems]}/>
    </div>
  )
}

export default InitialShop

