import { Spotlight, Endorsement, Tutorial, Social } from '../../components'
import './homepage.scss';

const Homepage = () => {
    return (
        <div className="awg__homepage">
            <Spotlight />
            <Endorsement />
            <Tutorial />
            <Social />
        </div>
    )
}

export default Homepage