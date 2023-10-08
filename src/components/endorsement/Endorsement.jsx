import './endorsement.scss';

const Endorsement = () => {
    return (
        <div className="awg__endorsement">
            <div className="awg__endorsement-innercontainer">
                <div className="awg__endorsement-review">
                    <div class="awg__endorsement-stars">
                        <div class="glsr-star glsr-star-full one-star" aria-hidden="true"></div>
                        <div class="glsr-star glsr-star-full two-star" aria-hidden="true"></div>
                        <div class="glsr-star glsr-star-full three-star" aria-hidden="true"></div>
                        <div class="glsr-star glsr-star-full four-star" aria-hidden="true"></div>
                        <div class="glsr-star glsr-star-full five-star" aria-hidden="true"></div>
                    </div>
                    <div class="awg__endorsement-slider">
                        <div class="awg__endorsement-slider__container">
                            <div>
                                <h3>"Ant War is amazing"</h3>
                                <p>-AXIƧ</p>
                            </div>
                            <div>
                                <h3>"It's the perfect mix"</h3>
                                <p>-Val</p>
                            </div>
                            <div>
                                <h3>"I'm addicted!"</h3>
                                <p>-Jagsta</p>
                            </div>
                            <div>
                                <h3>"for strategy addicts"</h3>
                                <p>-WingSeraphim</p>
                            </div>
                            <div>
                                <h3>"I play this game religiously"</h3>
                                <p>-SmittHead</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Endorsement