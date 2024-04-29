import './login.css'
import { Link, useNavigate  } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Email enviado:', email)
    sessionStorage.setItem('email', email)
    navigate('/')
  }

  return (
    <div className='login-container'>
      <div className='info-login'>
        <div className="logo">
          <a href='/'>
            <img src='/logo-header.png' />
          </a>
        </div>
        <h1>
          Aprender
        </h1>
        <h3>
          Nunca ha sido tan fácil como ahora
        </h3>
        <Link className='login-item' to='blog'>Leer más</Link>
      </div>
      <div className='login-form'>
        <div className='form-titles'>
          <h4>Hola de nuevo!</h4>
          <h6>Bienvenido</h6>
        </div>
        <div className='form-login'>
          <form onSubmit={handleSubmit}>
            <div className='form-login-input-container'>
              <div>
                <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Tu email ..."
                    required
                  />
                <input
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    placeholder="Tu contraseña ..."
                    required
                  />
              </div>
              <button className='login-form-buttom' type="submit">Inicia Sesión</button>
            </div>
          </form>
          <a href='/'>¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  )
}

export default Login