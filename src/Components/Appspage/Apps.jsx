import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Apps.css'
const Apps = () => {
  return (
    <div>
      <div className='forexoptions'>
      <Link to="myaccount">My Account</Link>
      <Link to="trade">Trade</Link>
      <Link to="watchlist">Watch List</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Apps
