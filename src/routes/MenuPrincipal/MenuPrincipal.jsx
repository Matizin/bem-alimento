import React from 'react'
import Header from '../../components/header'
import '../../css/style-menuPrincipal.css'
import seta from '../../images/seta.png'

const MenuPrincipal = () => {
  return (
    <div className="menu-principal">
      <Header />
      <div className="container">
        <div className="box card-plano-nutricional">
          <h1>Plano Nutricional</h1> 
          <img src={seta} alt="seta-icon" />
        </div>
        <div className="box card-ingestão-hidrica">
          <h3>Ingestão Hídrica</h3>
          <h4>Meta Diária 2L</h4>
        </div>
        <div className="box card-estado-nutricional">
          <h2>Estado Nutricional</h2>
          <div className='card-dados-nutricional'>
            <span>IMC: 73,8kg</span>
            <span>Peso: 73,8kg</span>
            <span>Altura: 73,8kg</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPrincipal