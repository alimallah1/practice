import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Apps from './Components/Appspage/Apps'
import Wallet from './Components/Walletpage/Wallet'
import Settings from './Components/Settingspage/Settings'
import Support from './Components/Supportpage/Support'
import Learning from './Components/Learningpage/Learning'
import Dashboard from './Components/Dashboardpage/Dashboard';
import AccountSettings from './Components/Account Settings page/AccountSettings'
import Documents from './Components/Documentspage/Documents'
import SupportHelp from './Components/Support & Help page/SupportHelp'
import MyAccount from './Components/MyAccountpage/MyAccount'
import Trade from './Components/Tradepage/Trade'
import WatchList from './Components/Watchlistpage/WatchList'
function SharedRoutes() {
  return (
  
        <Routes>
          <Route path="/dashboard"element={<Dashboard/>}/>

          <Route path="/apps"element={<Apps/>}>
            <Route path='myaccount' element={<MyAccount/>}/>
            <Route path='trade' element={<Trade/>}/>
            <Route path='watchlist' element={<WatchList/>}/>
          </Route>
          
          <Route path="/wallet"element={<Wallet/>}/>

          <Route  path="settings"element={<Settings/>}>
          
             <Route path='account' element={<AccountSettings/>}/> 
             <Route path='documents' element={<Documents/>}/> 
             <Route path='support&help' element={<SupportHelp/>}/> 
          
          </Route>

          <Route path="/support"element={<Support/>}/>
          <Route path="/learning"element={<Learning/>}/>
        </Routes>
  )
}

export default SharedRoutes
