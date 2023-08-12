import './Home.css'
import Intro from '../../components/Intro/Intro'
import Example from '../../components/Example/Example'
import WhoAmI from '../../components/WhoAmI/WhoAmI'
import Portfolio from '../../components/Portfolio/Portfolio'

const Home = () => {

    return (
        <>
            <Intro />
            <WhoAmI />
            <Portfolio />
            {/* <Example /> */}
        </>
    )
}

export default Home