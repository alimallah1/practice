import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import './AccountSettings.css'

const AccountSettings = () => {
  return (
 <div className='subdiv'>

    <div className='accountdiv'>
       <h2>Subscription Plans</h2>
    </div>

<div className='flexs'>

    <div className='free'>
      <p>Free<br></br><span className='best'>Best for personal use</span> </p>
      <h2 className='dollar1'>0$<span className='month1'>/month</span></h2>
      <button className='btn' type="button">Current Plan</button>

      <p className='lists'>What you get:<br></br><br></br><FaCheck /><span className='task'>  Task Management</span><br></br><br></br>
      <FaCheck /><span className='project'>  Project Plannig</span><br></br><br></br><FaCheck /><span className='team'>  Team Collaboration</span>
      <br></br><br></br><FaCheck /><span className='notification'>  Notifications and Reminders</span><br></br><br></br>
      <FaCheck/><span className='what'>  What you get</span></p>
    </div>

    <div className='starter1'>
      <p>Starter<br></br><span className='best'>Best for personal use</span> </p>
      <h2 className='dollar1'>8$<span className='month1'>/month</span></h2>
      <button className='btn' type="button">Upgrade</button>

      <p className='lists2'>All free features,plus:<br></br><br></br><FaCheck /><span className='kanban'>  Kanban Boards</span><br></br><br></br>
      <FaCheck /><span className='gantt'>  Gantt Charts</span><br></br><br></br><FaCheck /><span className='resource'>  Resource Allocation</span>
      <br></br><br></br><FaCheck /><span className='calendar'>  Calendar Integration</span><br></br><br></br>
      <FaCheck/><span className='progress'> Progress Tracking</span></p>

    </div>

    <div className='starter1'>
      <p>Starter<br></br><span className='best'>Best for personal use</span> </p>
      <h2 className='dollar1'>8$<span className='month1'>/month</span></h2>
      <button className='btn' type="button">Upgrade</button>

      <p className='lists2'>All free features,plus:<br></br><br></br><FaCheck /><span className='kanban'>  Kanban Boards</span><br></br><br></br>
      <FaCheck /><span className='gantt'>  Gantt Charts</span><br></br><br></br><FaCheck /><span className='resource'>  Resource Allocation</span>
      <br></br><br></br><FaCheck /><span className='calendar'>  Calendar Integration</span><br></br><br></br>
      <FaCheck/><span className='progress'> Progress Tracking</span></p>
    </div>

</div>
     <div className='realdemo'>
      <h2>Real & Demo Accounts</h2>

      <div className='flexdemo'>

      <p className='para1'><span className='real'>Real Accounts</span><br></br><br></br>1991  <RiDeleteBin6Fill /><br></br><br></br>
      1992  <RiDeleteBin6Fill /><br></br><br></br>1993    <RiDeleteBin6Fill /><br></br><br></br>
      1994    <RiDeleteBin6Fill /></p>

      <p className='para2'><span className='demo'>Demo Accounts</span><br></br><br></br>1991  <RiDeleteBin6Fill /><br></br><br></br>
      1992    <button type="submit">Restore</button> <br></br><br></br>1993    <button type="submit">Restore</button><br></br><br></br>
      1994    <button type="submit">Restore</button></p>

      </div>

     </div>
 </div>

  )
}

export default AccountSettings
