import './Portfolio.css'
import Project from '../Project/Project'
import usePageContent from '../../hooks/usePageContent'
import useProjects from '../../hooks/useProjects'

const Portfolio = () => {

    const { projects } = useProjects()

    projects?console.log(projects):null
    
    return (
        <div className="portfolio" id='portfolio'>
            <div id="portfolio__link"></div>
            <div className="portfolio__container">
                {projects && projects.map((project, index) => {
                    return <Project key={index} project={project} />
                })
                }</div>
        </div>
    )

}

export default Portfolio