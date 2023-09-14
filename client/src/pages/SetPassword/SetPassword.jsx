import React from 'react'
import Input from '../../components/UIKit/Input/Input'
import InputInvalidMessage from '../../components/UIKit/InputInvalidMessage/InputInvalidMessage'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import './SetPassword.css'

const params = {
    inputs: {
        password: {
            label: "Пароль",
            id: "password",
            type: "password",
            placeholder: "Мин. 6 символов"
        },
        passwordRepeat: {
            label: "Повторите пароль",
            id: "passwordRepeat",
            type: "password",
            placeholder: "Подтвердите новый пароль"
        },
    }
}

const ManageButtons = () => {
    return ('')
}

const SubmitButtons = () => {
    return (<button>Сохранить</button>)
}

const SetPassword = () => {
  return (
    <form className='form-container'>
        <FormNameRow name={'Установите новый пароль'} />
        <Input input={params.inputs.password}/>
        <InputInvalidMessage text={'Пароли не совпадают.'} />
        <Input input={params.inputs.passwordRepeat}/>
        <FormControlsRow manageButtons={ManageButtons} submitButtons={SubmitButtons} />
    </form>
  )
}

export default SetPassword