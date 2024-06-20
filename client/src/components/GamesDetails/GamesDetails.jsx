import "./GamesDetails.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GamesDetails() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [matchesData, setMatchesData] = useState(null);
    const { matchDate } = useParams();

    const fetchMatchDetails = async (date) => {
        try {
            const response = await axios.get(`http://localhost:8080/matches/${date}`);
            setMatchesData(response.data);
            setIsLoading(false);
        } catch (err) {
            console.log("Error: ", err);
            setError(true);
        }
    };

    useEffect(() => {
        if (matchDate) {
            fetchMatchDetails(matchDate);
        }
    }, [matchDate]);

    if (isLoading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Something went wrong. Please try refreshing the page</p>;
    }

    return (
        <section className="gameDetails">
            <article className="gameDetails__container">
                {matchesData.games.map((game) => (
                    <div key={game.match} className="gameDetails__subcontainer">
                        <h1 className="gameDetails__match">Match: {game.match}</h1>
                        <h2 className="gameDetails__location">Stadium: {game.stadium}</h2>
                        <div className="gameDetails__card">
                            <h3 className="gameDetails__title">Kick-off Time:</h3>
                            <div className="gameDetails__schedule">
                                <p className="gameDetails__time">CET: {game.kickoff_time_CET}</p>
                                <p className="gameDetails__time">MT: {game.kickoff_time_MT}</p>
                                <p className="gameDetails__time">ET: {game.kickoff_time_ET}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
}

export default GamesDetails;
