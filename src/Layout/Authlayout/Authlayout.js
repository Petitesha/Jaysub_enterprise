import Logo from '../../Images/logo.svg';
import './Authlayout.modules.css';
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
    return (
      <div className="auth">
            <img src={Logo} alt="Logo" />
            <div className="auth_container">
                <div className="form_container">
                    {children}
                </div>
            </div>
            <Link to="/" className="back">  ← Back </Link>
      </div>
    );
  };
  
  export default AuthLayout;
  