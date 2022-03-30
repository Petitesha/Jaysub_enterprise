import Manipad from '../../Images/Manipad.svg';
import './About.modules.css';
import Secure from '../Secure/Secure';

const About = (props) => {
  return (
    <div className='aboutcontainer' >
        <div className='manipad'>
            <img src={Manipad} alt="Manipad" />
        </div>
        <div>
            <h3>ABOUT OUR COMPANY</h3>
            <h2>Our Awesome Features</h2>
            <div></div>
            <p>Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
            <div>
                <div>
                    <Secure />
                </div>
            </div>
        </div>
    </div>
  )
}
export default About