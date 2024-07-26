import "./GamesDetails.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";

function GamesDetails() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [eventsData, setEventsData] = useState(null);
    const { matchDate } = useParams();
    const { matchData } = useOutletContext();
    const dates = Object.keys(matchData);

    const fetchEventDetails = async (date) => {
        try {
            const response = await axios.get(`http://localhost:8080/events/${date}`);
            setEventsData(response.data);
            setIsLoading(false);
        } catch (err) {
            console.log("Error: ", err);
            setError(true);
        }
    };

    useEffect(() => {
        if (matchDate) {
            fetchEventDetails(matchDate);
        }
    }, [matchDate]);

    if (isLoading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Something went wrong. Please try refreshing the page</p>;
    }

    if (!eventsData || eventsData.length === 0) {
        return <p className="gameDetails__no-events">Today's schedule: No events.</p>;
    }

    return (
        <section className="gameDetails">
            <h1 className="gameDetails__date">{matchDate}</h1>
            <article className="gameDetails__container">
                {eventsData.map((event, index) => (
                    <div key={index} className="gameDetails__subcontainer">
                        <h2 className="gameDetails__sport">{event.sport}</h2>
                        <div className="gameDetails__card">
                            <h3 className="gameDetails__title">Time:</h3>
                            <div className="gameDetails__schedule">
                                <p className="gameDetails__time">Local Time: {event.time_local}</p>
                                <p className="gameDetails__time">ET: {event.time_et}</p>
                            </div>
                            <p className="gameDetails__event">
                                {event.event === "Group Stage"
                                    ? `${event.teams}`
                                    : `${event.event}`}
                            </p>
                        </div>
                    </div>
                ))}
            </article>
            <section className="gameDetails__nav">
                {dates.map((date) => (
                    <Link key={date} to={`/events/${date}`} className="gameDetails__nav-link">
                        {date}
                    </Link>
                ))}
            </section>
        </section>
    );
}

export default GamesDetails;
