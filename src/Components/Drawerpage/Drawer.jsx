import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { RiDashboard2Fill } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosBook } from "react-icons/io";
import {useState} from 'react';
import { Link } from 'react-router-dom'
import {createTheme} from '@mui/material';
import './Drawer.css'

function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    
  }
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const blackTheme = createTheme({
      palette: {
        background: {
          paper: 'black', // Changed this line
        },
      },
      components: {
        MuiDrawer: {
          styleOverrides: {
            paper: {
              width: '90%',
            },
          },
        },
        MuiButton: {
          styleOverrides:{
            root:{
              display: 'none',
            },
          },
        },
      },
    });
    const DrawerList = (
      <Box sx={{ width:'100%',backgroundColor:'black' }} role="presentation" onClick={toggleDrawer(false)}>

        <List>
          
       
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
        
  
        </List>
        
        <Divider />
  
      </Box>
    );
  
    return (
      <div>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        
        <Drawer theme={blackTheme} open={open} onClose={toggleDrawer(false)}  >
          {DrawerList}
        </Drawer>
      </div>
    );
  }



export default TemporaryDrawer
