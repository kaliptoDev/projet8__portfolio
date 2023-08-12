import './Home.css'
import Intro from '../../components/Intro/Intro'
import Skills from '../../components/Skills/Skills'
import Example from '../../components/Example/Example'
import WhoAmI from '../../components/WhoAmI/WhoAmI'

const Home = () => {

    return (
        <>
            <Intro />
            <WhoAmI />
            <Example />
            {/* <Skills /> */}
        </>
    )
}

export default Home