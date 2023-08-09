import './Skill.css'

const Skill = ({ skill }) => {
// console.log(skill)
    const { name, description, icon } = skill ? skill : { name: null, description: null, icon: null}

    return (
        <div className="skill">
            <div className="skill__icon">
                <img src={icon} alt={name} />
            </div>
            <div className="skill__name">
                <h3>{name}</h3>
            </div>
            <div className="skill__description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Skill