import { Link } from 'react-router-dom'
import Menu from '../menu/menu'
import './header.css'
import useLoginData from '../../hooks/useLogin'

function Header() {
  const loginData = useLoginData()

  function logOut() {
    const event = new CustomEvent('logout')
    window.dispatchEvent(event)
  }

  return (
    <div className="header-container">
      <div className="logo">
        <img src='/logo-header.png' />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className='login'>
        {loginData ? 
          <div className='user-login-container'>
            <div>
              Hola, <strong>{loginData}</strong>
            </div>
            <button className='login-item' onClick={logOut}>Cerrar Sesión</button>
          </div> :
          <nav>
            <Link className='login-item' to='inicia-sesion'>Inicia Sesión</Link>
          </nav>
        }
        
      </div>
    </div>
  )
}

export default Header