import "./GamesNav.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GamesNav({ matchData }) {
  const [dates, setDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDates = async () => {
    try {
      const response = await axios.get("http://localhost:8080/events");
      const uniqueDates = [...new Set(Object.keys(response.data))]; // Ensure unique dates
      setDates(uniqueDates);
      setIsLoading(false);
    } catch (err) {
      console.log("Error: ", err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchDates();
  }, []);

  if (isLoading) {
    return <p>Loading dates...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try refreshing the page</p>;
  }

  return (
    <section className="gameNav">
      {dates.map((date) => (
        <article key={date} className="gameNav__container">
          <Link to={`/events/${date}`}>
            <div className="gameNav__details">
              <p className="gameNav__date">{date}</p>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}

export default GamesNav;
