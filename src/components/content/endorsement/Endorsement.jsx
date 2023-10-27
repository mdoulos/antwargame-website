import './endorsement.scss';

const Stars = () => (
    <>
        <div class="awg__endorsement-stars">
            <div class="glsr-star glsr-star-full one-star" aria-hidden="true"></div>
            <div class="glsr-star glsr-star-full two-star" aria-hidden="true"></div>
            <div class="glsr-star glsr-star-full three-star" aria-hidden="true"></div>
            <div class="glsr-star glsr-star-full four-star" aria-hidden="true"></div>
            <div class="glsr-star glsr-star-full five-star" aria-hidden="true"></div>
        </div>
    </>
)

const reviews = [
    [
        { quote: "Ant War is amazing", author: "AXIƧ" },
        { quote: "It's the perfect mix", author: "Val" },
        { quote: "My favorite game in SC2", author: "BabyOnBaby" },
        { quote: "Nice game!", author: "RedComrade" },
        { quote: "This is 11 out of 10", author: "Zlo" },
    ],
    [
        { quote: "Very GOOD", author: "SoOtwO" },
        { quote: "I'm Addicted!", author: "Jagsta" },
        { quote: "10/10 great game", author: "Kenny" },
        { quote: "for strategy addicts", author: "WingSeraphim" },
        { quote: "I play this game religiously", author: "SmittHead" },
    ],
    [
        { quote: "[My] Favorite Game On Here.", author: "ChronicSmoka" },
        { quote: "10/10, would ant again.", author: "Soulless" },
        { quote: "Perfect", author: "Nexus" },
        { quote: "Brilliant fun. Hours of fun.", author: "RetribuD" },
        { quote: "An amazing game I love it", author: "Zurvan" },
    ]
];

const ReviewList = ({ reviews }) => (
    <div className="awg__endorsement-slider">
        <div className="awg__endorsement-slider__container">
            {reviews.map((review, index) => (
                <div key={index}>
                    <h3>{`"${review.quote}"`}</h3>
                    <p>-{review.author}</p>
                </div>
            ))}
        </div>
    </div>
);

const Endorsement = () => {
    return (
    <div className="awg__endorsement">
        <div className="awg__endorsement-masked-bg">
        </div>
        <div className="awg__endorsement-innercontainer">
            <h2>What players say about Ant War</h2>
            <div className="awg__endorsement-sliders">
                {reviews.map((reviewList, index) => (
                    <blockquote key={index} className="awg__endorsement-review">
                        <Stars />
                        <ReviewList reviews={reviewList} />
                    </blockquote>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Endorsement