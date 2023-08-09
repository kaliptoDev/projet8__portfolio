import './Header.css'
import usePageContent from '../../hooks/usePageContent'
import useCurrentLanguage from '../../hooks/useCurrentLanguage'
import { useEffect, useState } from 'react'
const Header = () => {

    const { currentLanguage, setCurrentLanguage } = useCurrentLanguage()
    const { pageContent } = usePageContent()

    const header = pageContent ? pageContent.header : null
    const nav = header ? header.nav : null

    const [shouldLogoShrink, setShouldLogoShrink] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isUnderIntro, setIsUnderIntro] = useState(false)
    

    const handleChangeHeight = () => {
        const height = window.scrollY

        if (height > 10 && !shouldLogoShrink) {
            setShouldLogoShrink(true)
            document.querySelector('.header__logo__div').classList.add('noShadow')

        }
        if (height < 10 && shouldLogoShrink) {
            setShouldLogoShrink(false)
            document.querySelector('.header__logo__div').classList.remove('noShadow')
            if (document.querySelector('.header__nav').classList.contains('reduced')) toggleMenu()
        }
        if (height < ((window.innerHeight / 2)) && isMobile) document.querySelector('.reduceMenu__button').classList.add('transparent')
        if (height > ((window.innerHeight / 2)) && isMobile) document.querySelector('.reduceMenu__button').classList.remove('transparent')

        if (!isMobile) document.querySelector('.reduceMenu__button').classList.add('transparent')
        if (height > (window.innerHeight / 2) && !isUnderIntro) setIsUnderIntro(true)
        if (height < (window.innerHeight / 2) && isUnderIntro) setIsUnderIntro(false)
    }

    useEffect(() => {
        if (isMobile && isUnderIntro && !document.querySelector('.header__nav').classList.contains('reduced')) toggleMenu()
    }, [isUnderIntro])

    const handleResize = () => {
        const width = window.innerWidth
        if (width < 1000) setIsMobile(true)
        else setIsMobile(false)
        handleChangeHeight()
    }

    useEffect(() => {
        handleResize()
    }, [])

    const toggleMenu = () => {
        const nav = document.querySelector('.header__nav')
        const reduceMenu = document.querySelector('.reduceMenu__button')
        const background = document.querySelector('.header__background')
        const logo = document.querySelector('.header__logo__div')

        if (nav.classList.contains('reduced')) {
            nav.classList.remove('reduced')
            nav.classList.add('recovered')
            reduceMenu.classList.remove('reduceMenu__reduced')
            reduceMenu.classList.add('reduceMenu__recovered')
            background.classList.remove('reduced')
            background.classList.add('recovered')
            logo.classList.remove('reduced')
            logo.classList.add('recovered')

        }
        else {
            nav.classList.add('reduced')
            nav.classList.remove('recovered')
            reduceMenu.classList.add('reduceMenu__reduced')
            reduceMenu.classList.remove('reduceMenu__recovered')
            background.classList.remove('recovered')
            background.classList.add('reduced')
            logo.classList.remove('recovered')
            logo.classList.add('reduced')

        }

        if (nav.classList.contains('reduced')) {
            const arrow = document.querySelector('.reduceMenu__icon')
            arrow.classList.add('reducedMenu__icon__reduced')
        }
        else {
            const arrow = document.querySelector('.reduceMenu__icon')
            arrow.classList.remove('reducedMenu__icon__reduced')
        }
    }

    const handleToggleMenu = () => {
        toggleMenu()
    }

    useEffect(() => {
        const logo = document.querySelector('.header__logo__div')
        if (shouldLogoShrink) logo.classList.remove('header__logo__unshrinked')
        else logo.classList.add('header__logo__unshrinked')
    }, [shouldLogoShrink])

    useEffect(() => {
        window.addEventListener('scroll', handleChangeHeight)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handleChangeHeight)
            window.removeEventListener('resize', handleResize)
        }
    })

    const handleLanguage = () => {
        const language = document.querySelector('.changeLanguage')
        if(currentLanguage === 'en') setCurrentLanguage('fr')
        else setCurrentLanguage('en')
    }

    return (
        <>
            <header className="header">
                <div className='header__logo__div'>
                    <img src='/logos/logo.svg' alt='logo' className='header__logo' />
                </div>

                <div className='header__background'></div>

                <button className={`reduceMenu__button transparent`} onClick={handleToggleMenu}>
                    <img src='/icons/arrow.svg' alt='menu' className='reduceMenu__icon' />
                </button>
                <nav className='header__nav recovered'>
                    <ul className='nav__list'>
                        <li><a href="/" className='header__home header__nav__item'>{pageContent ? nav.home[currentLanguage] : "default"}</a></li>
                        <li><a href="/skills" className='header__skills header__nav__item'>{pageContent ? nav.skills[currentLanguage] : "default"}</a></li>
                        <li><a href="/portfolio" className='header__portfolio header__nav__item'>{pageContent ? nav.portfolio[currentLanguage] : "default"}</a></li>
                        <li><a href="/pricing" className='header__pricing header__nav__item'>{pageContent ? nav.pricing[currentLanguage] : "default"}</a></li>
                        <li><a href="/contact" className='header__contact header__nav__item'>{pageContent ? nav.contact[currentLanguage] : "default"}</a></li>
                        <div className='changeLanguage header__nav__item' onClick={handleLanguage}>
                            <img src={`/icons/${currentLanguage}.svg`} alt='language' className='changeLanguage__icon' />
                        </div>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header //to be deleted on 404