import React from 'react'
import Input from '../../components/UIKit/Input/Input'
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'
import Link from '../../components/UIKit/Link/Link'
import LinkNavigate from '../../components/UIKit/LinkNavigate/LinkNavigate'
import "./RestorePassword.css"

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
        <LinkNavigate to={'/login'} text={'Назад'} />
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