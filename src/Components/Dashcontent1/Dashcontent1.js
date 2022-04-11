import updown from '../../Images/updown.svg';
import credit from '../../Images/credit.svg';
import './Dashcontent1.modules.css';

const Dashcontent1 = () =>{
    return(
        <div className='content'>
            <div className='toptext'>
                <h3>HOME</h3>
                <p>Welcome back , Oluwatobi.</p>
            </div>
            <div className='innercontent'>
                <div className='innercontent1'>
                    <div className='content1'>
                        <div className='spending'>
                            <p>spendings</p>
                        </div>
                        <div className='incontent1'>
                            <div className='month'>
                                <p>This Month</p>
                                <img src={updown} alt="arrows" />
                            </div>
                            <p>TOTAL MONEY DEPOSITED</p>
                            <h3 className='green'> ₦ 0.00</h3>
                            <p>TOTAL MONEY WITHDRAWN</p>
                            <h3 className='red'> ₦ 0.00 </h3>
                        </div>
                    </div>
                </div>
                <div className='innercontent2'>
                    <div className='context2'>
                        <img src={credit} alt="credit" />
                       <p className='context2p'>YOUR JAYSUB BALANCE</p>
                       <p className='money'><span>₦</span>  0.00</p>
                       <button>Fund</button>
                       <button>Withdraw</button>
                    </div>
                </div>
            </div>
            <div className='transaction'>
                <h3>Transactions</h3>
                <div className='account'>
                    <div className='withdrawals'>
                        <p>2020-05-21</p>
                        <p>2020-05-21</p>
                        <p>2020-05-21</p>
                        <p>2020-05-21</p>
                        <p>2020-05-21</p>
                        <p>2020-05-21</p>
                    </div>
                    <div className='withdrawals'>
                        <p>Investment</p>
                        <p>Airtime Purchase</p>
                        <p>Deposit</p>
                        <p>Withdrawal</p>
                        <p>Withdrawal</p>
                        <p>Deposit</p>
                    </div>
                    <div className='withdrawals'>
                        <p className='greenp'>50,000</p>
                        <p className='redp'>2,000</p>
                        <p className='greenp'>success</p>
                        <p className='redp'>cancelled</p>
                        <p className='greenp'>success</p>
                        <p className='greenp'>success</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashcontent1;