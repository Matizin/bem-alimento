import React from 'react';
import Header from '../../components/header';
import '../../css/style-educacaoNutricional.css';
import videoDrauzio from '../../images/videoDrauzio.jpeg';
import videoHamburguer from '../../images/videoHamburguer.jpeg';
import videoRelogio from '../../images/videoRelogio.jpeg';
import youtube from  '../../images/youtube.jpeg';

function EducacaoNutricional() {
  return (
    <div className="educacao-nutricional">
    <Header />
    <main>
      <section className="content-section">
        <h2>Conteúdos Digitais</h2>
        <div className="content-cards">
          <div className="card">
            <a href="https://www.youtube.com/watch?v=5gyTL7vqwMA" target="_blank">
            <img src={videoDrauzio} alt="Video 1" />
            <p>Você cuida da sua saúde?</p>
            </a>
          </div>
          <div className="card">
          <a href="https://www.youtube.com/watch?v=ywUuoTJJznA" target="_blank">
            <img src={videoHamburguer} alt="Video 2" />
            <p>Alimentação saudável</p>
            </a>
          </div>
          <div className="card">
          <a href="https://www.youtube.com/watch?v=qfgVPwEfvr0" target="_blank">
            <img src={videoRelogio} alt="Video 3" />
            <p>O grande erro do jejum</p>
            </a>
          </div>
        </div>
      </section>
      <section className="lives-section">
        <h2>Lives</h2>
        <div className="live">
          <h3>Sem lives no momento !</h3>
        </div>
      </section>
    </main>
  </div>
);

  
}

export default EducacaoNutricional
