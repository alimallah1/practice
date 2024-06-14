import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';
import Drawer from '../Drawerpage/Drawer';
import './Navbar.css'
const Navbar = () => {
const location=useLocation();
const dashboardText = location.pathname.startsWith("/")
    ? location.pathname.slice(1)
    : location.pathname;
    const title = "dashboard";
    const capitalizedTitle = dashboardText.toUpperCase()[0] + dashboardText.slice(1);
   
  return (
<div className="navbar">
  <div className='drawerwrapper'>
<Drawer/>
</div>
         <h1 className='capitaltitle'> {capitalizedTitle} <span className="custom"><NotificationsIcon/><AccountCircleIcon/></span> 
         </h1>
      </div>

  )
}

export default Navbar
