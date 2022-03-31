import './Investment.css';
// import constant '../constant/constant';

const Investment = ({ type, img, title, text, content, button }) => {
  let element;

  switch (type) {
    case 'picfirst':
      element = (
        <>
          <div className="picfirstimg">
            <img src={img} alt="Manipad" />
          </div>
          <div className="picfirsttext">
            <h4>{title}</h4>
            <p>{text}</p>
            <p>{content}</p>
            <button>{button}</button>
          </div>
        </>
      );
      break;
    case 'textfirst':
      element = (
        <>
          <div className="picfirsttext">
            <h4>{title}</h4>
            <p>{text}</p>
            <p>{content}</p>
            <button>{button}</button>
          </div>
          <div className="picfirstimg">
            <img src={img} alt="Manipad" />
          </div>
        </>
      );
      break;
    default:
      element = (
        <>
          <div className="picfirsttext">
            <h4>{title}</h4>
            <p>{text}</p>
            <p>{content}</p>
            <button>{button}</button>
          </div>
          <div className="picfirstimg">
            <img src={img} alt="Manipad" />
          </div>
        </>
      );
      break;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {element}
    </div>
  );
};
export default Investment;
