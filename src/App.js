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
    
    setRepositories([...repositories, res.data]);
  }

  async function handleRemoveRepository(id) {
    // TODO remove repository by id
    await api.delete(`projects/${id}`);
    const res = await api.get('/projects');
    setRepositories(res.data);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repo) => {
          return(
          <li key={repo.id}>
            { repo.title }

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
