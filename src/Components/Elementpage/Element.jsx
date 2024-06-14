import React from 'react'
import BarChart from '../BarChartpage/BarChart'

const Element= () => {
  return (
    <div>
<div className="navelement">
        <p className="total">Total Invested Value<br></br> <div className="totalcolor">$2,344</div></p>
         <p className="forex">GT-Forex<br></br><div className="forexcolor">$0</div></p>
         <p className="stocks">GT-Stocks<br></br><div className="stockscolor">$0</div></p>
         <p className="crypto">GT-Crypto<br></br><div className="cryptocolor">$0</div></p>
          
</div> 
<BarChart/>
</div>
  )
}

export default Element
