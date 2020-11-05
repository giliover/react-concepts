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

  async function handleAddRepository() {
    // TODO
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
