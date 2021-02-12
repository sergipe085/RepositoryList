import React, { useState, useEffect } from "react";

import api from './services/api.js';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setRepositories(response.data);
    })
  }, [])

  async function handleAddRepository() {
    // TODO add repository to api
    const res = await api.post('/projects', { title: `Projeto: ${Date.now()}` });
    console.log(res);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repo) => {
          return(
          <li key={repo.id}>
            Repositório 1

            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
          );
        })}     
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
