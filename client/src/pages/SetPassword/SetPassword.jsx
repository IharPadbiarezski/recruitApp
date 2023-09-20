import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/UIKit/Input/Input'
import InputInvalidMessage from '../../components/UIKit/InputInvalidMessage/InputInvalidMessage'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import { AuthContext } from "../../context/authContext";
import './SetPassword.css'


const SetPassword = () => {
    
    const [inputs, setInputs] = useState({
        password: "",
        confirmPassword: "",
    });
    
    const [err, setError] = useState(null);
    
    const navigate = useNavigate();
    
    const { setPassword } = useContext(AuthContext);
    
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await setPassword(inputs)
          navigate("/login");
        } catch (err) {
          setError(err.response.data);
        }
    };

    const params = {
        inputs: {
            password: {
                label: "Пароль",
                id: "password",
                type: "password",
                name: "password",
                placeholder: "Мин. 6 символов",
                value: inputs.password,
                onChange: handleChange
            },
            passwordRepeat: {
                label: "Повторите пароль",
                id: "confirmPassword",
                type: "password",
                name: "confirmPassword",
                placeholder: "Подтвердите новый пароль",
                value: inputs.passwordRepeat,
                onChange: handleChange
            },
        }
    }
    
    const ManageButtons = () => {
        return ('')
    }
    
    const SubmitButtons = () => {
        return (<button onClick={handleSubmit} >Сохранить</button>)
    }


  return (
    <form className='form-container'>
        <FormNameRow name={'Установите новый пароль'} />
        <Input input={params.inputs.password} />
        {err && <InputInvalidMessage text={err} />}
        <Input input={params.inputs.passwordRepeat} />
        <FormControlsRow manageButtons={ManageButtons} submitButtons={SubmitButtons} />
    </form>
  )
}

export default SetPassword