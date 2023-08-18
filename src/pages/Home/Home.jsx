import './Home.css'
import Intro from '../../components/Intro/Intro'
import Example from '../../components/Example/Example'
import WhoAmI from '../../components/WhoAmI/WhoAmI'
import Portfolio from '../../components/Portfolio/Portfolio'
import Header from '../../components/Header/Header'
import Pricing from '../../components/Pricing/Pricing'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {

    return (
        <>
            <Header />
            <Intro />
            <WhoAmI />
            <Portfolio />
            <Pricing />
            <Contact />
            <Footer />
            {/* <Example /> */}
        </>
    )
}

export default Home