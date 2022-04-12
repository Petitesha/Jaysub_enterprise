import { Link } from "react-router-dom";

const Navigation = () => {
return(
    <nav className= "navactive">
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
            )
            }
            export  default Navigation