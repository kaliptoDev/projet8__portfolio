import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const SkillsContext = createContext({
    skills: {},
    setSkills: () => {},
    error: null
})

// PROVIDER = fournisseur du context
const SkillsProvider = ({ children }) => {
    const [skills, setSkills] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/data/skills.json')
            .then((response) => response.json())
            .then((data) => setSkills(data))
            .catch((err) => setError(err))
    }, [])

    return (
        <SkillsContext.Provider value={{ skills, setSkills, error }}>
            {children}
        </SkillsContext.Provider>
    )
}

export default SkillsProvider