import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const ProjectsContext = createContext({
    projects: [],
    setSkills: () => { },
    error: null
})

// PROVIDER = fournisseur du context
const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/data/projects.json')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => setError(err))
    }, [])

    return (
        <ProjectsContext.Provider value={{ projects, setProjects, error }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider