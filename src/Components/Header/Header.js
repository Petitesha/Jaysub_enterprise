import { Link } from "react-router-dom";
import logo from "../../Images/logo.svg"
import './Header.modules.css'
import Hamburger from '../../Images/hamburger.svg';
import { useState } from "react";
// import reactRouterDom from "react-router-dom"


const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 
 const showSideBar = () => setIsOpen(!isOpen);


    return (
        <header>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="logo-1" />
                </div>
                <nav className="nav" >
                    <ul className="navlinks">
                        <li className="Services">
                            <Link to="/" className="links">Services</Link>
                        </li>
                        <li className="Invest">
                            <Link to="/invest" className="links">Invest</Link>
                        </li>
                        <li className="Contact Us">
                            <Link to="/ContactUs" className="links">Contact Us</Link>
                        </li>
                        <li className="Log In">
                            <Link to="/LogIn" className="links">Log In</Link>
                        </li>
                    </ul>
                    <div className="Signup">
                        <Link to="Signup" className="signlink">Sign Up</Link>
                    </div>
                </nav>
                <div className="hamburger" onClick={showSideBar} >
                <img src={Hamburger}  alt="hamburger" />
                </div>
            </div>
        </header>
    )
}
export default Header