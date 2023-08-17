import './Portfolio.css'
import Project from '../Project/Project'
import usePageContent from '../../hooks/usePageContent'
import useProjects from '../../hooks/useProjects'

const Portfolio = () => {

    const { projects } = useProjects()
    
    return (
        <div className="portfolio__div" id='portfolio__div'>
            <div id="portfolio"></div>
            <div className="portfolio__container">
                {projects && projects.map((project, index) => {
                    return <Project key={index} project={project} />
                })
                }</div>
        </div>
    )

}

export default Portfolio