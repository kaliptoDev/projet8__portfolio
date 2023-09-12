import './Portfolio.css'
import Project from '../Project/Project'
import usePageContent from '../../hooks/usePageContent'
import useProjects from '../../hooks/useProjects'

const Portfolio = () => {

    const { projects } = useProjects()

    return (
        <div className="portfolio__div" id='portfolio__div'>
            <div id="portfolio"></div>
            <div className="portfolio__title">
                <h1 className='portfolio__title__h1'>Portfolio</h1>
            </div>
            <div className="portfolio__container">
                {projects && projects.map((project, index) => {
                    return <Project key={index} project={project} background={index % 2} id={index + 1} nbOfProjects={projects.length} />
                })
                }</div>
        </div>
    )

}

export default Portfolio