import {  Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Invest from './pages/Invest/Invest';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Header from './Components/Header/Header';
import Service from './pages/Service/Service';
import Mainlayout from './Layout/Mainlayout/Mainlayout';
import Forgotpassword from './pages/Auth/Forgotpassword';




function App() {
  return (
      <div className="App">
         <Header />
          <Switch>
            <Route path="/" exact component={Service} />
            <Route path="/invest" exact component={Invest} />
            <Route path="/ContactUs" exact component={ContactUs} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Signup" exact component={Signup} />
            <Route path="/Forgotpassword" exact component={Forgotpassword} />
        </Switch> 
      </div>
  );
}
// function App() {
//   return (
//     <Router>
//       <div >
//         <main>
//         <div >
//           <Routes>
//             <Route path='/' element={<Mainlayout><Service/></Mainlayout>} exact />
//             <Route path='/invest' element={<Mainlayout><Invest/></Mainlayout>} exact />
//             <Route path='/ContactUs' element={<Mainlayout><ContactUs/></Mainlayout>} exact />
//             <Route path='/Signup' element={<Signup/>} exact />
//             <Route path='/Login' element={<Login/>} exact />
//             <Route path='/Forgotpassword' element={<Forgotpassword/>} exact />
//           </Routes>
//         </div>
//         </main>
//       </div>
//     </Router>
//   );
// };


export default App;
