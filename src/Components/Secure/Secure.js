// import Securestyle from '../../Components/Secure/Secure.module.css';
import Nounsecure from '../../Images/secure.svg';
import Nounreliable from '../../Images/credible.svg';
import Nounsupport from '../../Images/support.svg';
import './Secure.modules.css';

const Secure = (props) => {
    return (
        <div>
            <div className='mainsecure' >
                <div>
                    <div className='secure'>
                        <img src={Nounsecure} alt="Nounsecure" />
                        <h3> {props.title} We’re Secured </h3>
                    </div>
                    <p> {props.content} Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
                </div>
            </div>
            <div className='mainsecure' >
                <div>
                    <div className='secure'>
                        <img src={Nounreliable} alt="Nounreliable" />
                        <h3>We’re Reliable</h3>
                    </div>
                    <p>Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
                </div>
            </div>
            <div className='mainsecure' >
                <div>
                    <div className='secure'>
                        <img src={Nounsupport}  alt="Nounsupport" />
                        <h3>Best Support </h3>
                    </div>
                    <p>Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
                </div>
            </div>
       </div>
    );
}
export default Secure;