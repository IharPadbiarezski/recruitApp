import React from 'react'
import Button from '../../components/Button/Button'

const Login = () => {
  return (
    <div className='form-container'>
        <h1>Вход КрутРекрут</h1>
        <form>
            {/* <div> */}
                <div>
                    <label htmlFor="email">Эл. почта</label>
                    <input id='email' type="email" placeholder='example@gmail.com' />
                </div>
                
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input id='password' type="password" placeholder='Мин. 6 символов' />
                </div>
            {/* </div> */}
            <div>
                <Button>Забыли пароль?</Button>
                <Button>Войти</Button>
            </div>
        </form>s
    </div>
  )
}

export default Login