import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <Link className='menu-item' to=''>Inicio</Link>
      <Link className='menu-item' to='cursos'>Cursos</Link>
      <Link className='menu-item' to='contactanos'>Contáctanos</Link>
      <Link className='menu-item' to='blog'>Blog</Link>
    </nav>
  )
}

export default Menu