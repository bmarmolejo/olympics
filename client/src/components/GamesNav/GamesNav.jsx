import "./GamesNav.scss";
import ball from "../../assets/images/ball.png";

function GamesNav() {
    return (
        <section className="gameNav">
            <article className="gameNav__container">
                <img className="gameNav__img" src={ball} alt="ball"/>
                <div className="gameNav__details">
                    <h3 className="gameNav__title">Country</h3>
                    <p className="gameNav__date">Date</p>
                </div>
            </article>
            <article className="gameNav__container">
                <img className="gameNav__img" src={ball} alt="ball"/>
                <div className="gameNav__details">
                    <h3 className="gameNav__title">Country</h3>
                    <p className="gameNav__date">Date</p>
                </div>
            </article>
            <article className="gameNav__container">
                <img className="gameNav__img" src={ball} alt="ball"/>
                <div className="gameNav__details">
                    <h3 className="gameNav__title">Country</h3>
                    <p className="gameNav__date">Date</p>
                </div>
            </article>
        </section>
    );
}

export default GamesNav;