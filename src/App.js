
import './App.css';
import Navbar from './Components/Navbarpage/Navbar';
import Sidebar from './Components/Sidebarpage/Sidebar'
import SharedRoutes from './sharedRoutes';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Apps from './Components/Appspage/Apps';


function App() {
  return (
   
    <BrowserRouter>
      <div className="fullpage">
        <Sidebar />
      
        <div className="div2">
          <Navbar /><hr className='horizental'></hr>
          <SharedRoutes />
        </div>
     
        
      </div>
    </BrowserRouter>
  );
}


export default App;
