import "./GamesNav.scss";
import ball from "../../assets/images/ball.png";
import { Link } from "react-router-dom";
import { parseISO, format } from "date-fns";

function GamesNav({ matchData = [] }) {
  const formatDate = (dateString) => {
    const dateObject = parseISO(dateString);
    return format(dateObject, "MMMM d");
  };

  return (
    <section className="gameNav">
      {matchData.map((match) => (
        <article key={match.date} className="gameNav__container">
          <Link to={`/matches/${match.date}`}>
            <img className="gameNav__img" src={ball} alt="ball" />
            <div className="gameNav__details">
              <p className="gameNav__date">{formatDate(match.date)}</p>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}

export default GamesNav;
