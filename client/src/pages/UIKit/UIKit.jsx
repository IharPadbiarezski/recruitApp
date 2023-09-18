import React from 'react'
import Button from '../../components/UIKit/Button/Button'
import Link from '../../components/UIKit/Link/Link'
import Input from '../../components/UIKit/Input/Input'
import Textarea from '../../components/UIKit/Textarea/Textarea'
import './UIKit.css'

const params = {
    inputs: {
        email: {
            label: "Title",
            id: "email",
            type: "email",
            placeholder: "example@gmail.com",
            className: "invalid"
        },
        password: {
            label: "Пароль",
            id: "password",
            type: "password",
            placeholder: "Мин. 6 символов"
        },
        
    }/*,
    textarea: {
        email: {
            label: "Title",
            id: "email",
            type: "email",
            placeholder: "example@gmail.com",
            className: "invalid"
        }
        
    }*/
}






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
                <Button style={'filled-xl-fixed'} text={'Filled'} />
                <Button style={'outlined-xl-fixed'} text={'Outlined'} iconR={'icon-placeholder-outlined'} />
                <Button style={'transparent-xl-fixed'} iconL={'icon-placeholder-transparent'} text={'Transparent'} />
                <Button style={'filled-xl-hug'} iconL={'icon-placeholder-filled'} text={'Filled'} />
            {/* <button className='Filled'>Button</button> */}
             </div>
             <p>&Input</p>
             <div className='Surface'>
             <Input style={'default'} input={params.inputs.email} helpText={'Help Text'}/>
             </div>


             <p>&Textarea</p>
             <div className='Surface'>
             <Textarea style={'txtarea-default'} textarea={params.inputs.email} helpText={'Help Text'}/>
             </div>

        </div>
    )
  }


  export default UIKit





