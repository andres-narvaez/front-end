import './contactanos.css'
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

function Contactanos() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [textArea, setTextArea] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeTextArea = (event) => {
    setTextArea(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Email enviado:', email)
    navigate('/')
  }

  return (
    <div className='contact-main-container'>
      <div className='right-content-contact'>
        <h1>
          ¡Pongámonos en <strong>Contacto!</strong>
        </h1>
        <p>
          ¿Tienes alguna pregunta o necesitas ayuda? Contáctanos por correo electrónico, teléfono o mediante el formulario de contacto que se encuentra a continuación. Estamos ansiosos por ayudarte.
        </p>
        <h6>
          ¡Qué bueno saber de ti!
        </h6>
      </div>
      <div className='left-content-contact'>
        <form onSubmit={handleSubmit}>
          <div className='form-login-input-container'>
            <div>
              <input
                  type="text"
                  value={name}
                  onChange={handleChangeName}
                  placeholder="Tu nombre completo ..."
                  required
                />
              <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Tu email ..."
                  required
                />
              <textarea 
                onChange={handleChangeTextArea}
              />
            </div>
            <button className='login-form-buttom' type="submit">Inicia Sesión</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
  
  export default Contactanos