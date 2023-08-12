import './Portfolio.css'
import Project from '../Project/Project'
import usePageContent from '../../hooks/usePageContent'

const Portfolio = () => {

    const { pageContent } = usePageContent()

    return (
        <div className="portfolio" id='portfolio'>
            <div id="portfolio__link"></div>
            <div className="portfolio__container">
                {pageContent && pageContent.portfolio.projects.map((project, index) => {
                    return <Project key={index} project={project} />
                })
                }</div>
        </div>
    )

}

export default Portfolio