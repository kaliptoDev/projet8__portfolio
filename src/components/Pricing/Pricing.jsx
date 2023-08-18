import './Pricing.css'
import usePageContent from '../../hooks/usePageContent';
import useCurrentLanguage from '../../hooks/useCurrentLanguage'

const Pricing = () => {
    const { currentLanguage } = useCurrentLanguage()
    const { pageContent } = usePageContent();

    pageContent?.pricing.firstColumn.content.map((item, index) => {
        let classes = ''
        index % 2 === 1 ? classes = 'light__gray' : classes = '';
        return <li className={classes}>{item[currentLanguage]}</li>
    })
    
    return (
        <div className="pricing__section">
            <div id='pricing'></div>
            <div className='pricing__container'>
                <div className='pricing__container__first pricing__div'>
                    <h3>Frontend</h3>
                    <div className='pricing__container__first__container pricing__container__ul'>
                        <ul className='pricing__ul'>
                            {pageContent?.pricing.firstColumn.content.map((item, index) => {
                                let classes = ''
                                index % 2 === 1 ? classes = 'light__gray' : classes = '';
                                return <li key={index} className={classes}>{item[currentLanguage]}</li>
                            })}
                        </ul>
                        <h3>{pageContent&&pageContent.pricing.price[currentLanguage]}</h3>
                    </div>
                </div>
                <div className='pricing__container__second pricing__div' >
                    <h3>Frontend + Backend</h3>
                    <div className='pricing__container__second__container pricing__container__ul'>
                        <ul className='pricing__ul'>
                        {pageContent?.pricing.secondColumn.content.map((item, index) => {
                                let classes = ''
                                index % 2 === 1 ? classes = 'light__gray' : classes = '';
                                return <li key={index} className={classes}>{item[currentLanguage]}</li>
                            })}
                        </ul>
                        <h3>{pageContent&&pageContent.pricing.price[currentLanguage]}</h3>
                    </div>
                </div>
                <div className='pricing__container__third__including__features pricing__div'>
                    <div className='pricing__container__third  '>
                        <h3>Maintenance / Développement à l'heure</h3>
                        <div className='pricing__container__third__container pricing__container__ul'>
                            <ul className='pricing__ul'>
                            {pageContent?.pricing.thirdColumn.content.map((item, index) => {
                                let classes = ''
                                index % 2 === 1 ? classes = 'light__gray' : classes = '';
                                return <li key={index} className={classes}>{item[currentLanguage]}</li>
                            })}
                            </ul>
                        </div>
                    </div>
                    <div className='pricing__features'>
                        <div className='pricing__features__div'>
                            <p>{pageContent && pageContent.pricing.thirdColumn.features.first.p[currentLanguage]}</p>
                            <span>{pageContent && pageContent.pricing.thirdColumn.features.first.span[currentLanguage]}</span>
                        </div>
                        <div className='pricing__features__div'>
                            <p>{pageContent && pageContent.pricing.thirdColumn.features.second.p[currentLanguage]}</p>
                            <span>{pageContent && pageContent.pricing.thirdColumn.features.second.span[currentLanguage]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Pricing;