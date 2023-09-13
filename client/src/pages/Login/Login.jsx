import React from 'react'
import{ Link } from 'react-router-dom'
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'
import Input from '../../components/ui/uikit/Input/Input'
import "./Login.css"

const params = {
    inputs: {
        email: {
            label: "Эл. почта",
            id: "email",
            type: "email",
            placeholder: "example@gmail.com"
        },
        password: {
            label: "Пароль",
            id: "password",
            type: "password",
            placeholder: "Мин. 6 символов"
        }
    }
}

const ManageButtons = () => {
    return (
        <Link to={'/restore'}>Забыли пароль?</Link>
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
        <Input input={params.inputs.password}/>
        <FormControlsRow manageButtons={ManageButtons} submitButtons={SubmitButtons} />
    </form>
  )
}

export default Login