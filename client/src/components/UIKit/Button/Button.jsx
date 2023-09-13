import React, {useState} from 'react'; 
import './Button.css'


const Button = ({ style, text, icon }) => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
    //   <button className={style} onClick={onclick}>
        <button className={isActive ? style : "filled--loading"} onClick={handleToggle}>
        <i className={icon} />
        {text}
      </button>
    );
  };

export default Button