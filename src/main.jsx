import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Inicio from './pages/inicio/inicio.jsx'
import Curso from './pages/cursos/curso.jsx'
import Contactanos from './pages/contactanos/contactanos.jsx'
import Blog from './pages/blog/blog.jsx'
import Login from './pages/login/login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
    <Routes>
      <Route path='/' element={<App />} >
        <Route  index
                element={<Inicio />} />
        <Route  path='cursos' 
                element={<Curso />} />
        <Route  path='contactanos' 
                element={<Contactanos />} />
        <Route  path='blog' 
                element={<Blog />} />
        <Route  path='inicia-sesion' 
                element={<Login />} />
        <Route path='*'
            element={
              <main>
                <p>Ooops no encontramos lo que buscabas</p>
              </main>
            }>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
