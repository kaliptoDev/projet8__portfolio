import './Contact.css'
import { useState } from 'react'
import usePageContent from '../../hooks/usePageContent';
import useCurrentLanguage from '../../hooks/useCurrentLanguage'

const Contact = () => {

    const { currentLanguage } = useCurrentLanguage()
    const { pageContent } = usePageContent();

    const [shouldShowMail, setShouldShowMail] = useState(false)
    const [mail, setMail] = useState('baptiste.andre.it@gmail.com')

    const handleMailToggle = () => {
        setShouldShowMail(!shouldShowMail)
    }

    return (
        <div className="contact" id='contact'>
            <h1 className='contact__title'>{pageContent?.contact.title[currentLanguage]}</h1>
            <div className="contact__container">
                <p className="contact__subtitle">{pageContent?.contact.content.firstP[currentLanguage]}</p>
                <p className="contact__subtitle">{pageContent?.contact.content.secondP[currentLanguage]}</p>
                <button className="contact__button" onClick={handleMailToggle}>{pageContent?.contact.buttonLabel[currentLanguage]}</button>
                <div className="contact__mail">
                    {shouldShowMail && <p className="contact__mail__text">{mail}</p>}
                </div>
            </div>
        </div>
    )

}

export default Contact