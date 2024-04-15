import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/header/header'
import './App.css'
import Footer from './components/footer/footer'

function App() {
  const location = useLocation()
  const isLogin = location.pathname === '/inicia-sesion'


  return (
    <>
      { !isLogin && <Header />}
      <main className={`main-content ${isLogin ? 'login' : ''}`}>
        <Outlet />
      </main>
      { !isLogin && <Footer />}   
    </>
  )
}

export default App
