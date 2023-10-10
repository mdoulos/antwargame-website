import { Spotlight, Endorsement, Tutorial, Social } from '../../components'
import crossBar from '../../assets/crossbar.png';
import './homepage.scss';

const Homepage = () => {
    return (
        <div className="awg__homepage">
            <Spotlight />
            <div className="awg__homepage-endorsementAndTutorial">
                <img src={crossBar} alt="Graphic Divider" className="awg__homepage-crossbar"/>
                <Endorsement />
                <Tutorial />
            </div>
            <Social />
        </div>
    )
}

export default Homepage