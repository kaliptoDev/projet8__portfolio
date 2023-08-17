import './Home.css'
import Intro from '../../components/Intro/Intro'
import Example from '../../components/Example/Example'
import WhoAmI from '../../components/WhoAmI/WhoAmI'
import Portfolio from '../../components/Portfolio/Portfolio'
import Header from '../../components/Header/Header'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {

    return (
        <>
            <Header />
            <Intro />
            <WhoAmI />
            <Portfolio />
            <Pricing />
            {/* <Example /> */}
        </>
    )
}

export default Home