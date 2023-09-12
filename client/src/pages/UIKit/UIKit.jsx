import React from 'react'
import Button from '../../components/UIKit/Button/Button'


import "./UIKit.css"


 


const UIKit = () => {

    // const handleClick = () => {
    //     this.classList.toggle("filled--loading");
    // }

    return (
        <div className='Board'>
            <p>&Buttons</p>
            <div className='ButtonsSurface'>
            <Button style={'Filled-XL'} text={'Filled'} />
            <Button style={'Outlined-XL'} text={'Outlined'} />
            <Button style={'Transparent-XL'} text={'Transparent'} />
            {/* <button className='Filled'>Button</button> */}
             </div>
        </div>
    )
  }


  export default UIKit