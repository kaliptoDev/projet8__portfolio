import { useContext } from "react"
import { SkillsContext } from "../providers/SkillsProvider"

const useSkills = () => {
    const context = useContext(SkillsContext)

    if (!context) {
        throw new Error('useSkills must be used within SkillsProvider')
    }

    return context
}

export default useSkills;