import './historyad.scss';
import { Link } from 'react-router-dom';

const HistoryAd = () => {
    return (
        <aside className="awg__historyad">
            <div>
                <h3>Learn About Ant War’s History</h3>
                <p>Ant War has had one wild ride of development. Epic battles have been waged. Millions of ants lay dead and buried in the sands of history. Learn how it all went down by reading this detailed historical account!</p>
                <div className="banner__sublinks">
                    <Link to="/history" className="awg-button"><span>See Ant War History</span></Link>
                </div>
            </div>
        </aside>
    )
}

export default HistoryAd