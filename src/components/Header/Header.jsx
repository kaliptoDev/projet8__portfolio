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

    const [logoClasses, setLogoClasses] = useState('')
    const [navClasses, setNavClasses] = useState('recovered ')
    const [reduceMenuButtonClasses, setReduceMenuButtonClasses] = useState('transparent ')
    const [navBackgroundClasses, setNavBackgroundClasses] = useState('')
    const [arrowClasses, setArrowClasses] = useState('')

    const handleChangeHeight = () => {
        const height = window.scrollY

        if (height > 10 && !shouldLogoShrink) {
            setShouldLogoShrink(true)
            if (!logoClasses.includes('noShadow')) setLogoClasses(''.concat(logoClasses, 'noShadow '))
            console.log(logoClasses + ' logoClasses')
        }
        if (height < 10 && shouldLogoShrink) {
            setShouldLogoShrink(false)
            setLogoClasses(logoClasses.replace('noShadow ', ''))
            console.log(logoClasses + ' noShadow Removal')
            if (navClasses.includes('reduced')) toggleMenu()
        }
        if (height < ((window.innerHeight / 2)) && isMobile && !reduceMenuButtonClasses.includes("transparent")) {
            setReduceMenuButtonClasses(''.concat(reduceMenuButtonClasses, 'transparent '))
            setLogoClasses(logoClasses.replace('noShadow ', ''))
        }
        if (height > ((window.innerHeight / 2)) && isMobile && reduceMenuButtonClasses.includes("transparent")) {
            setReduceMenuButtonClasses(reduceMenuButtonClasses.replace('transparent ', ''))
        }

        if (!isMobile && !reduceMenuButtonClasses.includes("transparent")) setReduceMenuButtonClasses(''.concat(reduceMenuButtonClasses, 'transparent '))
        if (height > (window.innerHeight / 2) && !isUnderIntro) setIsUnderIntro(true)
        if (height < (window.innerHeight / 2) && isUnderIntro) setIsUnderIntro(false)

    }

    useEffect(() => {
        if (isMobile && isUnderIntro && !navClasses.includes('reduced')) toggleMenu()
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

        if (navClasses.includes('reduced')) {
            setNavClasses(''.concat(navClasses.replace('reduced ', ''), 'recovered '))
            setNavBackgroundClasses(''.concat(navBackgroundClasses.replace('reduced ', ''), 'recovered '))
            setLogoClasses(''.concat(logoClasses.replace('reduced ', ''), 'recovered '))
            setReduceMenuButtonClasses(''.concat(reduceMenuButtonClasses.replace('reduced ', ''), 'recovered '))

        }
        else {
            setNavClasses(''.concat(navClasses.replace('recovered ', ''), 'reduced '))
            setNavBackgroundClasses(''.concat(navBackgroundClasses.replace('recovered ', ''), 'reduced '))
            setLogoClasses(''.concat(logoClasses.replace('recovered ', ''), 'reduced '))
            setReduceMenuButtonClasses(''.concat(reduceMenuButtonClasses.replace('recovered ', ''), 'reduced '))
        }

        if (navClasses.includes('recovered')) {
            setArrowClasses(arrowClasses + 'reducedMenu__icon__reduced ')
        }
        else {
            setArrowClasses(arrowClasses.replace('reducedMenu__icon__reduced ', ''))
        }
    }

    const handleToggleMenu = () => {
        toggleMenu()
    }

    useEffect(() => {

        if (shouldLogoShrink) {
            setLogoClasses(logoClasses.replace('header__logo__unshrinked ', ''))

        } else {
            setLogoClasses(logoClasses.replace('noShadow ', ''))
            if (!logoClasses.includes('header__logo__unshrinked')) {
                setLogoClasses(''.concat(logoClasses, 'header__logo__unshrinked '))
            }
        }
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
        if (currentLanguage === 'en') setCurrentLanguage('fr')
        else setCurrentLanguage('en')
    }

    return (
        <>
            <header className="header">
                <div className={`${logoClasses} header__logo__div`}>
                    <img src='/logos/logo.svg' alt='logo' className='header__logo' />
                </div>

                <div className={navBackgroundClasses + ' header__background '}></div>

                <button className={`${reduceMenuButtonClasses} reduceMenu__button`} onClick={handleToggleMenu}>
                    <img src='/icons/arrow.svg' alt='menu' className={`${arrowClasses} reduceMenu__icon`} />
                </button>
                <nav className={`${navClasses} header__nav `}>
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

export default Header