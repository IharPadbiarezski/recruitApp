import React from 'react'
import { Link } from 'react-router-dom'
import "./RestorePassword.css"
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import Input from '../../components/ui/uikit/Input/Input'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'

const params = {
    inputs: {
        email: {
            label: "Эл. почта",
            id: "email",
            type: "email",
            placeholder: "example@gmail.com"
        }
    }
}

const ManageButtons = () => {
    return (
        <Link to={'/login'}>Назад</Link>
    )
}

const SubmitButtons = () => {
    return (
        <div>
            <button>Сбросить пароль</button>
            <Link to={'/login'}>Войти</Link>
        </div>
    )
}

const RestorePassword = () => {
  return (
    <form className='form-container'>
        <FormNameRow name={'Восстановление пароля'}/>
        <Input input={params.inputs.email} />

        <FormControlsRow manageButtons={ManageButtons} submitButtons={SubmitButtons}/>
    </form>
  )
}

export default RestorePassword