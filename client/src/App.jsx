import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./Layout"; // Import the Layout component
import GamesDetails from './components/GamesDetails/GamesDetails';
import GamesNav from './components/GamesNav/GamesNav';

function App() {
  const [eventsData, setEventsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/events");
        setEventsData(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log("Error: ", err);
        setError(true);
      }
    };

    fetchEventDetails();
  }, []);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try refreshing the page</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout matchData={eventsData} />}>
          <Route index element={<GamesNav matchData={eventsData} />} />
          <Route path="/events/:matchDate" element={<GamesDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
