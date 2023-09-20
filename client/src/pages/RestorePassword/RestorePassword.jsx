import React, { useState, useContext } from 'react'
import Input from '../../components/UIKit/Input/Input'
import InputInvalidMessage from '../../components/UIKit/InputInvalidMessage/InputInvalidMessage'
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'
import Link from '../../components/UIKit/Link/Link'
import LinkNavigate from '../../components/UIKit/LinkNavigate/LinkNavigate'
import FormText from '../../components/UIKit/FormText/FormText'
import { AuthContext } from "../../context/authContext";
import "./RestorePassword.css"


const RestorePassword = () => {
    const [inputs, setInputs] = useState({
        email: ""
    });
    
    const [err, setError] = useState(null);

    const [successMessage, setSuccessMessage] = useState(null);
    
    const { restore } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(inputs)
          const res = await restore(inputs)
          console.log(res.data);
          setSuccessMessage(res.data);
        } catch (err) {
          setError(err.response.data);
        }
    };
    
    const ManageButtons = () => {
        return (
            <LinkNavigate to={'/login'} text={'Назад'} />
        )
    }
    
    const RestorePasswordButton = () => {
        return (
            <button onClick={handleSubmit}>Сбросить пароль</button>
        )
    }

    const SubmitButtons = () => {
        return (
            <div>
                {successMessage ? <Link to={'/login'}>Войти</Link> : <RestorePasswordButton />}
            </div>    
        )
    }

    const params = {
        inputs: {
            email: {
                label: "Эл. почта",
                id: "email",
                type: "email",
                name: "email",
                placeholder: "example@gmail.com",
                className: `${err ? "invalid" : ""}`,
                value: inputs.email,
                onChange: handleChange
            }
        },
        p: {
            text: `${successMessage ?? "Проверьте свою почту!"}`,
        }
    }

  return (
    <form className='form-container'>
        <FormNameRow name={'Восстановление пароля'}/>
        {!successMessage && <Input input={params.inputs.email} />}
        {err && !successMessage && <InputInvalidMessage text={err} />}
        {successMessage && <FormText values={params.p} />}
        <FormControlsRow manageButtons={ManageButtons} submitButtons={SubmitButtons}/>
    </form>
  )
}

export default RestorePassword