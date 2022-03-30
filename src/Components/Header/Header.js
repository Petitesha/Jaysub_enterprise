import Link from "../Link/Link"
import logo from "../../Images/logo.svg"
import './Header.modules.css'


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="logo-1" />
                </div>
                <nav className="nav">
                    <ul className="navlinks">
                        <li className="Services">
                            <Link to ="Services">Services</Link>
                        </li>
                        <li className="Invest">
                            <Link to ="Invest">Invest</Link>
                        </li>
                        <li className="Contact Us">
                            <Link to ="Contact Us">Contact Us</Link>
                        </li>
                        <li className="Log In">
                            <Link to ="Log In">Log In</Link>
                        </li>
                    </ul>
                    <div className="Signup">
                        <Link to ="Sign up">Sign Up</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header