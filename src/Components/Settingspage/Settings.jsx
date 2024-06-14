import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Settings.css'
const Settings = () => {
  return (
    <div >
      <div className='settingoption'>
       <Link to="account"> Account Settings</Link>
      <Link to="documents">Documents</Link>
      <Link to="support&help">Support & Help</Link>
      </div>
      <Outlet/>
    </div>
         
  )
}

export default Settings;
