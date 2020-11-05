import React, { useEffect, useState } from "react";
import "./styles.css";
import api from "./services/api";

function App() {
  const [ repo, setRepo ] = useState([])

  useEffect(() => {
    api
      .get( 'repositories' )
      .then((response) => {
        setRepo(response.data)        
      })
  }, [])

  const _repo = {
    url: "https://github.com/Rocketseat/umbriel",
    title: "Umbriel",
    techs: ["Node", "Desafio React", "TypeScript"]
  }

  async function handleAddRepository() {
    await api
    .post( 'repositories', _repo )
    .then( ({ data }) => setRepo( [ ...repo, data ] ) ) 
    .catch((err) => console.log(err.msg))
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repo.map(({title, id}) => {
          return(
            <li key={id}>
              { title }
              <button onClick={() => handleRemoveRepository(id)}>
                Remover
              </button>
            </li>          
          )   
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
