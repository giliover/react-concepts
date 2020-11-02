import React, { useState } from "react"
import { Header } from './components'

export default function App(){
    const [projects, setProject] = useState(["Desenvolvimento web", "Front-end web"])

    function handleAddProject(){
        return setProject([...projects, `Novo projeto ${Date.now()}`])
    }
    
    return(
        <>
        <Header title="Projects"/>
            <ul>
                {projects.map((project) => <li key={project}> {project} </li>)}
            </ul>
            <button onClick={handleAddProject}>Adcionar Projetos</button>
        </>
    )
}