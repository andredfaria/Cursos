import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    const [mandante, setMandante] = useState('');
    const [visitante, setVisitante] = useState('');

    return (
      <div className="App">
        <header className="App-header">
          <h1>Jogos Brasileiro</h1>
          <Form.Group>
            <div className="row">
              <div className="col-6">
                <Form.Control
                  onChange={(e) => setMandante(e.target.value)}
                  as="select"
                  size="lg"
                >
                  <option>América-MG</option>
                  <option>América-RN</option>
                  <option>Athletico-PR</option>
                  <option>Atlético-GO</option>
                  <option>Atlético-MG</option>
                  <option>Avaí</option>
                  <option>Bahia</option>
                  <option>Barueri</option>
                  <option>Botafogo-RJ</option>
                  <option>Brasiliense</option>
                  <option>Ceará</option>
                  <option>Chapecoense</option>
                  <option>Corinthians</option>
                  <option>Coritiba</option>
                  <option>Criciúma</option>
                  <option>Cruzeiro</option>
                  <option>CSA</option>
                  <option>Figueirense</option>
                  <option>Flamengo</option>
                  <option>Fluminense</option>
                  <option>Fortaleza</option>
                  <option>Goiás</option>
                  <option>Grêmio</option>
                  <option>Grêmio Prudente</option>
                  <option>Guarani</option>
                  <option>Internacional</option>
                  <option>Ipatinga</option>
                  <option>Joinville</option>
                  <option>Juventude</option>
                  <option>Náutico</option>
                  <option>Palmeiras</option>
                  <option>Paraná</option>
                  <option>Paysandu</option>
                  <option>Ponte Preta</option>
                  <option>Portuguesa</option>
                  <option>Santa Cruz</option>
                  <option>Santo André</option>
                  <option>Santos</option>
                  <option>São Caetano</option>
                  <option>São Paulo</option>
                  <option>Sport</option>
                  <option>Vasco</option>
                  <option>Vitória</option>
                </Form.Control>
              </div>
              <div className="col-6">
                <Form.Control
                  onChange={(e) => setVisitante(e.target.value)}
                  as="select"
                  size="lg"
                >
                  <option>América-MG</option>
                  <option>América-RN</option>
                  <option>Athletico-PR</option>
                  <option>Atlético-GO</option>
                  <option>Atlético-MG</option>
                  <option>Avaí</option>
                  <option>Bahia</option>
                  <option>Barueri</option>
                  <option>Botafogo-RJ</option>
                  <option>Brasiliense</option>
                  <option>Ceará</option>
                  <option>Chapecoense</option>
                  <option>Corinthians</option>
                  <option>Coritiba</option>
                  <option>Criciúma</option>
                  <option>Cruzeiro</option>
                  <option>CSA</option>
                  <option>Figueirense</option>
                  <option>Flamengo</option>
                  <option>Fluminense</option>
                  <option>Fortaleza</option>
                  <option>Goiás</option>
                  <option>Grêmio</option>
                  <option>Grêmio Prudente</option>
                  <option>Guarani</option>
                  <option>Internacional</option>
                  <option>Ipatinga</option>
                  <option>Joinville</option>
                  <option>Juventude</option>
                  <option>Náutico</option>
                  <option>Palmeiras</option>
                  <option>Paraná</option>
                  <option>Paysandu</option>
                  <option>Ponte Preta</option>
                  <option>Portuguesa</option>
                  <option>Santa Cruz</option>
                  <option>Santo André</option>
                  <option>Santos</option>
                  <option>São Caetano</option>
                  <option>São Paulo</option>
                  <option>Sport</option>
                  <option>Vasco</option>
                  <option>Vitória</option>
                </Form.Control>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <Button onClick={() => Buscar()}>Buscar</Button>
              </div>
            </div>
          </Form.Group>
        </header>
        <selection>
            <h2>
                {mandante}
                {visitante}
            </h2>
        </selection>
      </div>
    );
}

function Buscar() {

}

export default App;
