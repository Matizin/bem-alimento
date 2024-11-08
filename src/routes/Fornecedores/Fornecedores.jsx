import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/style-fornecedores.css';
import Header from '../../components/header';

function Fornecedores() {
  const bancosDeAlimentos = [
    { coords: [-23.55052, -46.6333], name: "Banco de Alimentos São Paulo" },
    { coords: [-22.90685, -43.1729], name: "Banco de Alimentos Rio de Janeiro" }
  ];

  return (
    <div className='fornecedores'>
      <Header />
      <div className='titulo'>
        <h1>Fornecedores</h1>
      </div>
      <div className='map'>
        <MapContainer center={[-15.77972, -47.92972]} zoom={4} style={{ height: "400px", width: "80%", margin: "0 auto" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bancosDeAlimentos.map((banco, index) => (
            <Marker key={index} position={banco.coords}>
              <Popup>{banco.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className='info-boxes'>
        <div className='info-box'>
          <h3>Banco de Alimentos</h3>
          <p>Local: São Paulo, SP</p>
        </div>
        <div className='info-box'>
          <h3>Centro de Distribuição</h3>
          <p>Local: Rio de Janeiro, RJ</p>
        </div>
        <div className='info-box'>
          <h3>Centro de Coleta</h3>
          <p>Local: Salvador, BA</p>
        </div>
      </div>
      <div className='button-container'>
        <button className='saiba-mais'>Saiba Mais</button>
      </div>
    </div>
  );
}

export default Fornecedores;
