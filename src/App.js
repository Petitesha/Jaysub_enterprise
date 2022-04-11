import {   Switch, Route} from 'react-router-dom';
import './App.css';
import Invest from './pages/Invest/Invest';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import Header from './Components/Header/Header';
import Service from './pages/Service/Service';
import Forgotpassword from './pages/Auth/Forgotpassword';
import {useEffect, useState} from 'react'
import Dashboard from './Dashboard/Dashboard';

import {useLocation} from 'react-router-dom'
function App() {

  const location = useLocation();
  const [show, setShow] = useState(true);
  useEffect(() =>{
    console.log(location.pathname)
    if(location.pathname === '/Signup' || location.pathname ==='/LogIn' || location.pathname ==='/Dashboard') setShow(false)
  },[location])

  console.log(show)
  return (
      <div className="App">
        {show && <Header />}
          <Switch>
            <Route path="/" exact component={Service} />
            <Route path="/invest" exact component={Invest} />
            <Route path="/ContactUs" exact component={ContactUs} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Signup" exact component={Signup} />
            <Route path="/Forgotpassword" exact component={Forgotpassword} />
            <Route path="/Dashboard" exact component={Dashboard} />
        </Switch> 
      </div>
  );
}

export default App;
