import Cards  from '../Cards/Cards';
import Regular from '../../Images/Regular.svg';
import Savings from '../../Images/Savings.svg';
import Ultimate from '../../Images/Ultimate.svg';
import pricestyle from './Prices.modules.css';

const prices = () => {
return (
    <div className='pricecontainer'>
        <div className='innerprice'>
            <div className='plans'>
                <h2>Choose your Investment Plans</h2>
                <p>Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
            </div>
            <div className='innerplan'>
                <Cards className='allcards'
                    image={Regular}
                    title="Regular Package" 
                />
                <Cards
                    image={Savings}
                    title="Savings Package" 
                />
                <Cards
                    image={Ultimate}
                    title="Ultimate Savings Plan" 
                />
            </div>
        </div>
    </div>
)
}
export default prices;