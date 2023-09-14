import React, {useState} from 'react'; 
import './Button.css'


const Button = ({ style, text, iconL, iconR }) => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
    //   <button className={style} onClick={onclick}>
        <button className={isActive ? style : "filled--loading"} onClick={handleToggle}>
        <i className={iconL} />
        {text}
        <i className={iconR} />
      </button>
    );
  };

export default Button