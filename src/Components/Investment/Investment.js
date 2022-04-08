import './Investment.css';
// import constant '../constant/constant';

const Investment = ({ type, img, title, text, content, button }) => {
  let element;

  switch (type) {
    case 'picfirst':
      element = (
        <div className='services1'>
          <div className="picfirstimg">
            <img src={img} alt="images" />
          </div>
          <div className="picfirsttext">
            <h4>{title}</h4>
            <p className="p">{text}</p>
            <p>{content}</p>
            <button>{button}</button>
          </div>
        </div>
      );
      break;
    case 'textfirst':
      element = (
        <div className='services1'>
          <div className="picsectext">
            <h4>{title}</h4>
            <p className="p">{text}</p>
            <p>{content}</p>
            <button>{button}</button>
          </div>
          <div className="picfirstimg">
            <img src={img} alt="Manipad" />
          </div>
        </div>
      );
      break;
    default:
      element = (
        <div className='services1'>
          <div className="picfirsttext">
            <h4>{title}</h4>
            <p className="p">{text}</p>
            <p>{content}</p>
            <button>{button}</button>
          </div>
          <div className="picfirstimg">
            <img src={img} alt="Manipad" />
          </div>
        </div>
      );
      break;
  }
  return (
    <div className="general" >
      <div className="innergeneral">
        {element} 
      </div>
    </div>
  );
};
export default Investment;
