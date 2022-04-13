import logo from '../Images/logo.svg';
import credit from '../Images/credit.svg';
import image from '../Images/image.svg';
import alarm from '../Images/alarm.svg';
import home from '../Images/Home.svg';
import airtime from '../Images/airtime.svg';
import cable from '../Images/cable.svg';
import conversion from '../Images/conversion.svg';
import investment from '../Images/investment.svg';
import logout from '../Images/logout.svg';
import settings from '../Images/settings.svg';
import transaction from '../Images/transaction.svg';
import data from '../Images/data.svg';
import { Link } from "react-router-dom";
import './Dashboard.modules.css';
import Dashcontent1 from '../Components/Dashcontent1/Dashcontent1';

const Dashboard = () => {
    return (
        <div className='main-div'>
            <div className='dashcontainer'>
                <div className='dashheader'>
                    <div className='logo'>
                        <img src={logo} alt="logo-1" />
                    </div>
                    <div className='innerdash'>
                        <div className='credit'>
                            <img src={credit} alt="credit" />
                            <p>100Jcredit</p>
                        </div>
                        <div className='kola'>
                            <img src={image} alt="pic" />
                            <p>Kolawole Oluwatobi</p>
                        </div>            
                        <div className='alarm'>
                            <img src={alarm} alt="alarm" />
                        </div>
                    </div>
                </div>            
            </div>
            <div className='dashboard2'>
                <div className='innerdash2'>
                    <div className='homedash'>
                        <div className='home'>
                            <img src={home} alt="home" />
                            <p>Home</p>
                        </div>
                        <div className='services2'>
                            <div className='servers'>
                                <img src={transaction} alt="transaction" />
                                <Link to="/transaction" className="serverlinks">Transaction</Link>
                            </div>
                            <div className='servers'>
                                <img src={investment} alt="investment" />
                                <Link to="/investment" className="serverlinks">Investment</Link>
                            </div>
                            <div className='servers'>
                                <img src={investment} alt="reseller" />
                                <Link to="/reseller" className="serverlinks">Reseller</Link>
                            </div>
                            <div className='servers'>
                                <img src={data} alt="data" />
                                <Link to="/dataservices" className="serverlinks">Data services</Link>
                            </div>
                            <div className='servers'>
                                <img src={cable} alt="cable" />
                                <Link to="/cablebill" className="serverlinks">Cable/Tv Bill</Link>
                            </div>
                            <div className='servers'>
                                <img src={cable} alt="cable" />
                               <Link to="/electricbill" className="serverlinks">Electric Bill</Link>
                            </div>
                            <div className='servers'>
                                <img src={airtime} alt="airtime" />
                                <Link to="/airtimepurchase" className="serverlinks">Airtime Purchase</Link>
                            </div>
                            <div className='servers'>
                                <img src={conversion} alt="conversion" />
                                <Link to="/airtimeconversion" className="serverlinks">Airtime Conversion</Link>
                            </div>
                            <div className='servers'>
                                <img src={settings} alt="settings" />
                                <Link to="/settings" className="serverlinks">Settings</Link>
                            </div>
                            <div className='servers'>
                                <img src={logout} alt="logout" />
                                <Link to="/logout" className="serverlinks">Log out</Link>
                            </div>
                        </div>
                    </div>
                    <div className='Dashcontent1'>
                        <Dashcontent1 />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;