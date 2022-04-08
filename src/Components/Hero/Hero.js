// import Header from '../Header/Header.js'
import image from '../../Images/heroimg.svg'
import { Link } from 'react-router-dom'
import Herobg from '../../Images/Herobg.svg'
import './Hero.modules.css'

const Hero = () => {
    return (
        <div className="hero-section">
         <div className="innerhero">
             <div className="innerherotext">
                    <div className="herotext">
                        <h2>Innovation Starts here</h2>
                    </div>
                    <div className="hero">
                        <div className="herolinks1">
                            <Link to="/" className='herolink'>Services</Link>
                        </div>
                        <div className="herolinks2">
                            <Link to="/investment" className='herolink1'>Investment</Link>
                        </div>
                        <div className="herolinks3">
                            <Link to="/signUp" className='herolink2'>Sign Up</Link>
                        </div>
                    </div>
             </div>
             <div className="innerheroimg">
                <img src={image} alt="logo-1" />
             </div>
         </div>
         <div className='Herobg'> 
             <img src={Herobg} alt="Herobg" />
        </div>
        </div>
    )
}
export default Hero