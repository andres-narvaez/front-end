import { useState } from 'react'
import Menu from '../menu/menu'
import './footer.css'

function Footer() {
  const [email, setEmail] = useState('')

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Email enviado:', email)
  }
  return (
    <div className="footer-container">
      <div className="logo-footer">
        <img src='/logo-footer.png' />
      </div>
      <div className="menu-footer">
        <Menu />
      </div>
      <div className='form-footer'>
        <form onSubmit={handleSubmit}>
          <label className='form-label'>
            Recibe las últimas noticias de Code Pass
          </label>
          <div className='form-input-container'>
            <input
                type="email-footer"
                value={email}
                onChange={handleChange}
                placeholder="Tu email ..."
                required
              />
            <button className='footer-form-buttom' type="submit">Suscribete</button>
          </div>
        </form>
      </div>
      <div className='copy-right'>
        <p>
          Front End Subgrupo 17 Politecnico Gran Colombiano
        </p>
      </div>
    </div>
  )
}

export default Footer