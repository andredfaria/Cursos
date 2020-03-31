import React, { Component, useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg'


function app(){
  const [email, setEmail] = useState('');
}
class App extends Component {

 async handleSubmit(event) {
  event.preventDefault();

  const response = await api.post('/sessions',{email: email });

  const { _id } = response.data;

  localStorage.setItem('user', _id);
  }

  render() {
    return (
      <div className="container">
        <img src={logo} alt="AirBnb"/>

        <div className="content">
          <p>
            TExto para o <strong>app </strong>appp com <strong>nenrfe</strong> neg asdarito
          </p>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">E_MAIL *</label>
            <input 
              type="email" 
              id="email"  
              placeholder="Seu email email"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <button className="btn" type="submit">Entrar</button>


          </form>
        </div>
      </div>
    );
  }
}

export default App;
