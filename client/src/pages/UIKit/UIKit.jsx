import React from 'react'
import Button from '../../components/UIKit/Button/Button'
import Link from '../../components/UIKit/Link/Link'


import "./UIKit.css"


 


const UIKit = () => {

    // const handleClick = () => {
    //     this.classList.toggle("filled--loading");
    // }

    return (
        <div className='Board'>
            <p>&Link</p>
            <div className='Surface'>
            <Link underline={'none'} link={'uikit'} text={'None'} />
            <Link underline={'solid'} link={'uikit'} text={'Solid'} />
            <Link underline={'dotted'} link={'uikit'} text={'Dotted'} />
            <Link underline={'dashed'} link={'uikit'} text={'Dashed'} />
            </div>
            <p>&Buttons</p>
            <div className='Surface'>
            <Button style={'Filled-XL'} text={'Filled'} />
            <Button style={'Outlined-XL'} text={'Outlined'} />
            <Button style={'Transparent-XL'} text={'Transparent'} />
            {/* <button className='Filled'>Button</button> */}
             </div>
        </div>
    )
  }


  export default UIKit