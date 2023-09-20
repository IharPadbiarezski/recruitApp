import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LinkNavigate from '../../components/UIKit/LinkNavigate/LinkNavigate'
import FormNameRow from '../../components/FormNameRow/FormNameRow'
import FormControlsRow from '../../components/FormControlsRow/FormControlsRow'
import Input from '../../components/UIKit/Input/Input'
import InputInvalidMessage from '../../components/UIKit/InputInvalidMessage/InputInvalidMessage'
import { AuthContext } from "../../context/authContext";
import './Login.css'

const Login = () => {

    const ManageButtons = () => {
        return (
            <LinkNavigate to={'/restore'} text='Забыли пароль?' />
        )
    }
    
    const SubmitButtons = () => {
        return (<button onClick={handleSubmit}>Войти</button>)
    }

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(inputs)
          navigate("/");
        } catch (err) {
          setError(err.response.data);
        }
    };

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
            },
            password: {
                label: "Пароль",
                id: "password",
                type: "password",
                name: "password",
                placeholder: "Мин. 6 символов",
                value: inputs.password,
                onChange: handleChange
            },
            
        }
    }


    return (
        <form className='form-container'>
            <FormNameRow name={'Вход КрутРекрут'} />
            <Input input={params.inputs.email}/>
            {err && <InputInvalidMessage text={err} />}
            <Input input={params.inputs.password}/>
            <FormControlsRow manageButtons={ManageButtons} submitButtons={SubmitButtons} />
        </form>
    )
}

export default Login