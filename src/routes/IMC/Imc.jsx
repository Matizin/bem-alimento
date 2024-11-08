import React, { useState } from 'react';
import Header from '../../components/header';
import '../../css/style-Imc.css';

function Imc() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault(); // Previne o reload da página ao enviar o formulário

    // Convertendo altura de centímetros para metros
    const alturaMetros = altura / 100;

    // Validando se altura e peso são valores válidos
    if (alturaMetros > 0 && peso > 0) {
      const imc = peso / (alturaMetros * alturaMetros);

      // Determinando a categoria do IMC
      let classificacao;
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else {
        classificacao = 'Obesidade';
      }

      setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
    } else {
      setResultado("Por favor, insira valores válidos para altura e peso.");
    }
  };

  return (
    <div className='Imc'>
      <Header />
      <main>
        <div className="imc-calculator">
          <h3>Felipe Ferreira</h3>
          <h2>Cálculo IMC</h2>
          <form onSubmit={calcularIMC}>
            <div className="input-group">
              <label>Altura</label>
              <input
                type="number"
                placeholder="cm"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Peso</label>
              <input
                type="number"
                placeholder="kg"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
          <p className="resultado">{resultado}</p>
        </div>
      </main>
    </div>
  );
}

export default Imc;