import React from 'react'
import LinkNavigate from '../../components/UIKit/LinkNavigate/LinkNavigate'
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'
import Input from '../../components/UIKit/Input/Input'
import InputInvalidMessage from '../../components/UIKit/InputInvalidMessage/InputInvalidMessage'
import "./Login.css"

const params = {
    inputs: {
        email: {
            label: "Эл. почта",
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
        
    }
}

const ManageButtons = () => {
    return (
        <LinkNavigate to={'/restore'} text='Забыли пароль?' />
    )
}

const SubmitButtons = () => {
    return (<button>Войти</button>)
}

const Login = () => {
  return (
    <form className='form-container'>
        <FormNameRow name={'Вход КрутРекрут'} />
        <Input input={params.inputs.email}/>
        <InputInvalidMessage text={'Эл. почта или пароль введены неверно.'} />
        <Input input={params.inputs.password}/>
        <FormControlsRow manageButtons={ManageButtons} submitButtons={SubmitButtons} />
    </form>
  )
}

export default Login