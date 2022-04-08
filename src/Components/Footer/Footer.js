import Message from '../../Images/Message.svg';
import { Link } from 'react-router-dom';
import Facebook from '../../Images/facebookvector.svg';
import Instagram from '../../Images/instagramvector.svg';
import Twitter from '../../Images/twittervector.svg';
import style from './Footer.modules.css';

const Footer = () => {
    return(
        <div className='Footer'>
            <footer>
            <div className='topfooter'>
                <div>
                    <img src={Message} alt="message" />
                </div>
                <p>Send us a message</p>
            </div>
                <div className='mainfooter'>
                    <div className='innermain'>
                        <h4>Jaysub</h4>
                        <p>“I came across Jaysub Enterprise through a friends page and since I have been patronizing they are very reliable and fast ‘ good customer services</p>
                    </div>
                    <div className='company'>
                        <h4 className='footerh4'>Company</h4>
                        <Link to='Home'>Home</Link>
                        <Link to='Investment'>Investment</Link>
                        <Link to='DataService'>Data Service</Link>
                        <Link to='ElectricBill'>Electric Bill</Link>
                        <Link to='CableService'>Cable Service</Link>
                        <Link to='CryptoExchange'>CryptoExchange</Link>
                    </div>
                    <div className='company'>
                        <h4 className='footerh4'>Support</h4>
                        <Link to='ContactUs'>Contact Us</Link>
                        <Link to='FAQ'> FAQ</Link>
                        <Link to='Login'>Login</Link>
                        <Link to='SignUp'>Sign Up</Link>
                    </div>
                    <div className='company'>
                        <h4 className='footerh4'>Contact Us</h4>
                       <p>info@jaysub.com</p>
                       <p>+234902358424</p>
                    </div>
                </div>
                <div className='lastfooter'>
                    <div className='innerlast'>
                        <p>©2019 All rights reserved</p>
                    </div>
                    <div className='icons'>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Twitter} alt="Twitter" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;