import './Contact.css'
import { useState } from 'react'

const Contact = () => {

    const [shouldShowMail, setShouldShowMail] = useState(false)
    const [mail, setMail] = useState('baptiste.andre.it@gmail.com')

    const handleMailToggle = () => {
        setShouldShowMail(!shouldShowMail)
    }

    return (
        <div className="contact" id='contact'>
            <h1 className='contact__title'>Contact</h1>
            <div className="contact__container">
                <p className="contact__subtitle">Besoin d'un devis, de renseignements, ou vous cherchez un développeur pour votre entreprise?</p>
                <p className="contact__subtitle">N'hésitez pas à me contacter! Je vous répondrai sous 48h.</p>
                <button className="contact__button" onClick={handleMailToggle}>Afficher le mail</button>
                <div className="contact__mail">
                    {shouldShowMail && <p className="contact__mail__text">{mail}</p>}
                </div>
            </div>
        </div>
    )

}

export default Contact