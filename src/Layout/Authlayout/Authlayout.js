import Logo from '../../Images/logo.svg';
import './Authlayout.modules.css';

const AuthLayout = ({ children }) => {
    return (
      <div className="auth">
            <img src={Logo} alt="Logo" />
            <div className="auth_container">
                <div className="form_container">
                    {children}
                </div>
            </div>
      </div>
    );
  };
  
  export default AuthLayout;
  