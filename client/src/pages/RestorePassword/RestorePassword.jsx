import React from 'react'
import Input from '../../components/UIKit/Input/Input'
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'
import Link from '../../components/UIKit/Link/Link'
import LinkNavigate from '../../components/UIKit/LinkNavigate/LinkNavigate'
import "./RestorePassword.css"
import FormText from '../../components/UIKit/FormText/FormText'

const params = {
    inputs: {
        email: {
            label: "Эл. почта",
            id: "email",
            type: "email",
            placeholder: "example@gmail.com"
        }
    },
    p: {
        text: "Проверьте свою почту! Мы отправили вам ссылку для сброса пароля на example@gmail.com",
        className: "display-none"
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

        <FormNameRow display={true} name={'Восстановление пароля'}/>
        <Input display={true} input={params.inputs.email} />

        <FormText values={params.p} />

        <FormControlsRow manageButtons={ManageButtons} submitButtons={SubmitButtons}/>
    </form>
  )
}

export default RestorePassword