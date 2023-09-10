import React from 'react'; 
import './Button.css'

function Button(props) {
    const { children , style } = props
    return (
        <button style={style}>{children}</button>
    );
};




export default Button;