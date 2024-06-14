import React from 'react'
import './Documents.css'

const Documents = () => {
  return (
    <div className='up'>
      <h2>Document Management</h2>

      <p className='documentpara'>Effortlessly update your KYC (Know Your Customer) documents 
        for each trading app. Keep your<br></br><br></br> account information up to date
         and meet regulatory requirements seamlessly. Submit and <br></br><br></br>manage
          necessary documents in one place for hassle-free trading.</p><br></br><br></br>

      <div className='down'>
       <h2 className='cry'>GT CRYPTO<br></br><span className='forcrypto'>Up to date</span></h2>
       <h2 className='gt'>GT FOREX <button type="button" className='forexbtn'>Update</button><br></br><span className='forforex'>Expired</span></h2>
       <h2 className='st'>GT Stocks<br></br><span className='forstocks'>Up to date</span></h2>
       
       </div>
    </div>
  )
}

export default Documents
