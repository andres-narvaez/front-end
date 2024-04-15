import { Link } from 'react-router-dom'
import Menu from '../menu/menu'
import './header.css'

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src='/logo-header.png' />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className='login'>
        <nav>
          <Link className='login-item' to='inicia-sesion'>Inicia Sesión</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header