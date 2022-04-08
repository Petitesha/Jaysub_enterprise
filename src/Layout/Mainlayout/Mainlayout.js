import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Mainlayout = ({children}) => {
    return(
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Mainlayout;