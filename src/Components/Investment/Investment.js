import './Investment.css';
// import constant '../constant/constant';

const Investment = ({type,img,title,text,content,button}) => {
   let element;

   switch(type){
         case 'picfirst':
            element = (
                <div className='picfirst'> 
                    <div className='picfirstimg'>
                        <img src={img} alt="Manipad" />
                    </div>
                    <div className='picfirsttext'>
                        <h4>{title}</h4>
                        <p>{text}</p>
                        <p>{content}</p>
                        <button>{button}</button>
                    </div>
                </div>
            );
            break;
            case 'textfirst':
                element = (
                    <div className='picfirst'> 
                        <div className='picfirsttext'>
                            <h4>{title}</h4>
                            <p>{text}</p>
                            <p>{content}</p>
                            <button>{button}</button>
                        </div>
                        <div className='picfirstimg'>
                            <img src={img} alt="Manipad" />
                        </div>
                    </div>
                );
                break;
            default:
                    element = (
                        <div className='textfirst'> 
                            <div className='picfirsttext'>
                                <h4>{title}</h4>
                                <p>{text}</p>
                                <p>{content}</p>
                                <button>{button}</button>
                            </div>
                            <div className='picfirstimg'>
                                <img src={img} alt="Manipad" />
                            </div>
                        </div>
                    );
                    break; 
   }
    return <div>
        {element}
    </div> ;
}
export default Investment;