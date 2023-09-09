import React from 'react'

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
                <a href="">Забыли пароль?</a>
                <input type="submit" value={'Войти'}/>
            </div>
        </form>
    </div>
  )
}

export default Login