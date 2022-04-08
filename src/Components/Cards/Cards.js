import cardstyles from './Cards.modules.css';

const cards = (props) => {
    return (
        <div className='cardcontainer'>
            <div className='innercard'>
                <div className='card1'>
                    <div className='img'>
                        <img src={props.image} alt="card1" />
                    </div>
                    <h4>{props.title}</h4>
                </div>
                <div className='card2'>
                    <h2> ₦ 50,000</h2>
                    <p>1 Month Investment</p>
                    <p>20% ROI</p>
                    <p>Money Guarantee</p>
                    <button>Proceed</button>
                </div>
            </div>
        </div>
    );
}
export default cards;