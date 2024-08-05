import { Outlet } from 'react-router-dom'

function InitialShop() {
  return (
    <div className='initial-shop flex-grow' >
      <Outlet/>
    </div>
  )
}

export default InitialShop

