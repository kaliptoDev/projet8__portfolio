import './Project.css'
import useCurrentLanguage from '../../hooks/useCurrentLanguage'

const Project = ({ project }) => {

    const { currentLanguage } = useCurrentLanguage()

    return (
        <div className="project">
            <div className="project__container">
                <div className="project__container__title">
                    <h3>{project.title[currentLanguage]}</h3>
                </div>

                <div className="project__container__image">
                    <img src={project.image} alt={project.title[currentLanguage]} className='project__image' />
                </div>
                <div className="project__container__description">
                    <div className='project__container__description__p'>
                        <p>{project.description[currentLanguage]}</p>
                    </div>
                    <div className="project__container__description__link">
                        <a href={project.link} target='_blank' >Repo</a>
                    </div>
                    <div className="portfolio__stack">
                        {project.stack.map((tech, index) => {
                            let techName = tech.split("/icons/")[1].split(".")[0]
                            return <img src={tech} key={index} alt={techName} className='portfolio__stack__image' />
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Project