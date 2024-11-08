import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../css/style-login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificação simples de email e senha
    if (email === 'usuario@exemplo.com' && senha === '123456') {
      navigate('/MenuPrincipal');
    } else {
      setErro('Email ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Maçã" className="logo" />
        <h1 className="title">Bem Alimento</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          {erro && <p className="error-message">{erro}</p>}
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
 