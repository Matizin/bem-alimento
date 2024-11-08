import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import '../css/style-header.css'
import perfil from '../images/perfil.png'

function Header() {
  return (
    <div id='header'>
        <header className='header'>
            <div className='icone-marca'>
                <img src={logo} alt="icon" />
            </div>
            <div className='nav-bar'>
                <Link to="/MenuPrincipal">Menu</Link>
                <Link to="/PlanoNutricional">Plano Nutricional</Link>
                <Link to="/EducacaoNutricional">Educação Nutricional</Link>
                <Link to="/Fornecedores">Fornecedores</Link>
            </div>
            <div>
                <div className='perfil'>
                <Link to="/Imc">Felipe Ferreira</Link> 
                    <img src={perfil} alt="icon" />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
