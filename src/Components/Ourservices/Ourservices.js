import Investment from '../Investment/Investment';
import { investment } from '../../Constants/index';
const Ourservices = () => {
  return (
    <section>
      {investment.map((item) => (
        <Investment
          type={item.type}
          img={item.img}
          title={item.title}
          text={item.text}
          content={item.content}
          button={item.button}
        />
      ))}
    </section>
  );
};
export default Ourservices;
