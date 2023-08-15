import './WhoAmI.css'
import useCurrentLanguage from '../../hooks/useCurrentLanguage'
import usePageContent from '../../hooks/usePageContent'

const WhoAmI = () => {

    const { currentLanguage } = useCurrentLanguage()
    const { pageContent } = usePageContent()


    return (
        <>
            <div id='whoami'>
                <div id='whoami__link'></div>
                <div className="whoami">
                    <div className='whoami__content'>
                        <div className='whoami__content__div'>
                            <img className='whoami__img' src='/images/portrait.jpg' alt={pageContent && pageContent.whoami.title[currentLanguage]} />
                            <p className='whoami__content__desc'>
                                <span className='span__first span__whoami'>«</span>
                                {pageContent ? pageContent.whoami.content[currentLanguage] : null}
                                <span className='span__last span__whoami'>»</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoAmI