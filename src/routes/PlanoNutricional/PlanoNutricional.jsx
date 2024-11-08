import React, { useState } from 'react';
import '../../css/style-planoNutricional.css';
import Header from '../../components/header';
import seta from '../../images/seta.png';
import sopa from '../../images/sopa.jpeg';
import sanduiche from '../../images/sanduiche.jpeg';
import tapioca from '../../images/tapioca.jpeg';

const PlanoNutricional = () => {
  const [showModal, setShowModal] = useState(false);
  const [newPlan, setNewPlan] = useState({ breakfast: "", lunch: "", dinner: "" });
  const [plans, setPlans] = useState([]);

  const toggleModal = () => setShowModal(!showModal);

  // Função para adicionar um novo plano e fechar o modal
  const handleAddPlan = () => {
    setPlans([...plans, newPlan]);
    setNewPlan({ breakfast: "", lunch: "", dinner: "" });
    toggleModal();
  };

  return (
    <div className="plano-nutricional">
      <Header />
      <div className="container">

        {/* Plano Nutricional Default */}
        <div className="box card-plano-nutricional">
          <h1>Plano Nutricional</h1>
          <img src={seta} alt="seta-icon" />
        </div>
        <div className="box">
          <div>
            <h3>Café da manhã</h3>
            <p>Ovos (3 unidades), temperado com pimenta do reino, pouco sal + 1/2 mamão + 1 copo de suco verde</p>
          </div>
          <div>
            <h3>Almoço</h3>
            <p>Arroz + feijão + lentilha<br/>Mandioca ou batata doce ou cenoura ou beterraba / brócolis ou espinafre ou abobrinha<br/>Filé de frango grelhado ou peixe ou carne vermelha</p>
          </div>
          <div>
            <h3>Jantar</h3>
            <p>Salada de folhas<br/>Mandioca ou batata doce ou cenoura ou beterraba / brócolis ou espinafre ou abobrinha<br/>Filé de frango ou peixe</p>
          </div>
        </div>

        {plans.map((plan, index) => (
          <div className="box" key={index}>
            <div>
              <h3>Café da manhã</h3>
              <p>{plan.breakfast}</p>
            </div>
            <div>
              <h3>Almoço</h3>
              <p>{plan.lunch}</p>
            </div>
            <div>
              <h3>Jantar</h3>
              <p>{plan.dinner}</p>
            </div>
          </div>
        ))}

        <button className="add-plan-btn" onClick={toggleModal}>Adicionar plano ➕</button>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Novo Plano Nutricional</h2>
              <input 
                type="text" 
                placeholder="Café da manhã" 
                value={newPlan.breakfast} 
                onChange={(e) => setNewPlan({ ...newPlan, breakfast: e.target.value })}
              />
              <input 
                type="text" 
                placeholder="Almoço" 
                value={newPlan.lunch} 
                onChange={(e) => setNewPlan({ ...newPlan, lunch: e.target.value })}
              />
              <input 
                type="text" 
                placeholder="Jantar" 
                value={newPlan.dinner} 
                onChange={(e) => setNewPlan({ ...newPlan, dinner: e.target.value })}
              />
              <button onClick={handleAddPlan}>Salvar</button>
              <button onClick={toggleModal}>Cancelar</button>
            </div>
          </div>
        )}


        <div className='titulo'>
          <h1>Biblioteca de Receitas</h1>
        </div>
        <section className="content-section">
          <div className="content-cards">
            <div className="card">
              <img src={sopa} alt="Video 1" />
              <p>Tapioca com queijo e ovo</p>
            </div>
            <div className="card">
              <img src={sanduiche} alt="Video 2" />
              <p>Sanduíche de Franco</p>
            </div>
            <div className="card">
              <img src={tapioca} alt="Video 3" />
              <p>Sopa de Macarrão com feijão</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlanoNutricional;
