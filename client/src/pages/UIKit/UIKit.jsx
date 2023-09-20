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
                <Button style={'primary-xl-fixed'} text={'Primary'} iconR={'icon-placeholder-primary'} />
                <Button style={'secondary-xl-fixed'} iconL={'icon-placeholder-transparent'} text={'Secondary'} />
                <Button style={'danger-xl-hug'} iconL={'icon-placeholder-danger'} text={'Danger'} />
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





