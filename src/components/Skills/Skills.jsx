import './Skills.css'
import Skill from '../Skill/Skill'
import useSkills from '../../hooks/useSkills'


const Skills = () => {

    const { skills } = useSkills()
    const knowledge = skills? skills.knowledge : null
    const softSkills = skills? skills.softSkills : null
    knowledge? knowledge.map((skill, index) => console.log(skill)) : null
    return (
        <section className="skills">
            <div className="skills__container__one">
            {/* {knowledge ? knowledge.map((skill, index) => <Skill key={index} skill={skill} />) : null} */}
            </div>
            <div className="skills__container__two">
            </div>
        </section>
    )
}

export default Skills