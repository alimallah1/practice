import React from 'react'
import logo from '../Assets/GivTrade.png'
import { Link } from 'react-router-dom'
import { RiDashboard2Fill } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosBook } from "react-icons/io";
import {useState} from 'react';
import './Sidebar.css'

function Sidebar  () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  
}

  
 
  return (

    <div className="wrapper">

          <div className="sidebar">

            <h1><img src={logo}/></h1>

          </div>
         
      <div className="list">
         <ul onClick={toggleSidebar}>
         <Link to="/dashboard" >< RiDashboard2Fill /><span className='dash'>Dashboard</span></Link><br></br><br></br>
           <Link to="/apps"><AiOutlineAppstoreAdd /><span className='appz'>App</span></Link><br></br><br></br>
           <Link to="/wallet"><FaWallet /><span className='wall'>Wallet</span></Link><br></br><br></br>
           <Link to="/settings"><IoSettingsOutline /><span className='sett'>Settings</span></Link><br></br><br></br>
           <Link to="/support"><BsFillInfoCircleFill /><span className='sup'>Support</span></Link><br></br><br></br>
           <Link to="/learning"><IoIosBook /><span className='lear' >Learning</span></Link><br></br><br></br>
         </ul>
      </div>

    </div>
  


  )

}

export default Sidebar
