import React from 'react'
import { SiTesla } from 'react-icons/si';
import AppleIcon from '@mui/icons-material/Apple';
import { FaAmazon } from 'react-icons/fa';
const Company = () => {
  return (
<div className="companies">

    <div className="apple">
    <p> <AppleIcon/><span className="apl">AAPL<br></br>Apple</span></p>
      <h1 className="a1">$2,344</h1> 
      <p className="ap">(+2,36%)</p>
    </div>

    <div className="tesla">
        <p><SiTesla/><span className="tsl">TSLA<br></br>Tesla</span></p>
        <h1 className="t1">$2,344</h1>
        <p className="ts">(+2,36%)</p>
    </div>

    <div className="amazon">
      <p><FaAmazon/><span className="azn">AMZN<br></br>Amazon</span></p>
        <h1 className="z1">$2,344</h1>
        <p className="am">(+2,36%)</p>
    </div>

 </div>
  )
}

export default Company
