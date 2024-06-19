import "./GamesDetails.scss";

function GamesDetails() {
    return (
        <section className="gameDetails">
            <article className="gameDetails__container">
                <div className="gameDetails__subcontainer">
                <h1 className="gameDetails__match">Match</h1>
                <h2 className="gameDetails__location">Stadium</h2>
                </div>
                <div className="gameDetails__card">
                    <h3 className="gameDetails__title">Kick-off Time:</h3>
                    <div className="gameDetails__schedule">
                        <p className="gameDetails__time">CET:</p>
                        <p className="gameDetails__time">MT:</p>
                        <p className="gameDetails__time">ET:</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default GamesDetails;