import './Project.css'
import useCurrentLanguage from '../../hooks/useCurrentLanguage'

const Project = ({ project, background, id, nbOfProjects }) => {

    const { currentLanguage } = useCurrentLanguage()

    let backgroundColor = ''
    if (background === 0) {
        backgroundColor = 'project__background__white'
    } else {
        backgroundColor = 'project__background__grey'
    }

    let topBorder = ''
    if (id < 4) {
        topBorder = 'project__border__top'
    }

    let rightBorder = ''
    if (id % 3 === 0) {
        rightBorder = 'project__border__right'
    }

    let last = ''
    if (id === nbOfProjects) {
        last = 'project__last'
    }


console.log(id)

console.log(nbOfProjects + " " + id)

    return (
        <div className={`project ${backgroundColor} ${topBorder} ${rightBorder} ${last}`}>
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
                    <div className="project__container__description__partof">
                        <p><span className='underlined'>{project.partOfLabel[currentLanguage]}</span><span>{project.partof[currentLanguage]}</span></p>
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