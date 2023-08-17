import { useContext } from "react"
import { ProjectsContext } from "../providers/ProjectsProvider"

const useProjects = () => {
    const context = useContext(ProjectsContext)

    if (!context) {
        throw new Error('useProjects must be used within ProjectsProvider')
    }

    return context
}

export default useProjects;