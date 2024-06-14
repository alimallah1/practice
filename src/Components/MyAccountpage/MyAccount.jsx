import React from 'react'
import './MyAccount.css'

const MyAccount = () => {
  return (
    <div className='fullbalance'>
  
    <div className='accountbalance'>

      <h1 className='hforex'>$2,344</h1> 
      <p className='forexbalance'>GT-Forex Balance</p>
     
      </div>

   <div className='butndiv'>
      <div className='twodivs'>
     
     <button type="button" className='addfunds'>+ Add Funds</button>
     <button type="button" className='transferfunds'>Transfer Funds</button>
     
    </div>
  </div>
   
    </div>
  )
}

export default MyAccount

