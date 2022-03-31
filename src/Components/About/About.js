import Manipad from '../../Images/Manipad.svg';
import './About.modules.css';
import Secure from '../Secure/Secure';

const About = (props) => {
  return (
      <div>
        <div className='aboutcontainer' >
            <div className='manipad'>
                <img src={Manipad} alt="Manipad" />
            </div>
            <div className='innerabout'>
                <h4 className='abouth3' >ABOUT OUR COMPANY</h4>
                <h2 className='abouth2'>Our Awesome Features</h2>
                <div className='emptydiv' ></div>
                <p className='aboutp'>Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
                <div className='aboutsecure'>
                    <div className='innersecure' >
                        <Secure />
                    </div>
                </div>
            </div>
        </div>
        <div className='ourservices'>
            <h2>Our services</h2>
            <p>Here are the Amazing services we offer at jaysub</p>
        </div>
    </div>
  )
}
export default About