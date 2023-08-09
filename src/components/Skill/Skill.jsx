import './Skill.css'
import useCurrentLanguage from '../../hooks/useCurrentLanguage'
import { useEffect, useState } from 'react'

const Skill = ({ skill, needToClose, setNeedToClose }) => {

    const { currentLanguage } = useCurrentLanguage()
    skill = JSON.parse(skill)



    return (
        <div className="skill">
            <div className="skill__title" onClick={handleOpen}>
                <div className="skill__icon__div">
                    <img src={skill && "/icons/" + skill.icon + ".svg"} alt={skill && skill.name[currentLanguage]} className='skill__icon' />
                </div>
                <div className="skill__name">
                    <h3>{skill && skill.name[currentLanguage]}</h3>
                </div>
            </div>
            <div className="skill__description descClosed">
                <p>{skill && skill.description[currentLanguage]}</p>
            </div>
        </div>
    )
}

export default Skill