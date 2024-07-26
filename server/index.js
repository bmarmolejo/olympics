import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const DATA_FILE = './data/olympics2024.json';

// Function to read data from the file
function readData() {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.Olympics2024;  // Access the Olympics2024 key directly
}

// Endpoint to get all events
app.get('/events', (req, res) => {
    const data = readData();
    res.json(data);
});

// Endpoint to get events by date
app.get('/events/:date', (req, res) => {
    const data = readData();
    const eventsOnDate = data[req.params.date];
    if (!eventsOnDate) {
        return res.status(404).send('No events found for this date. Error 404.');
    }
    res.json(eventsOnDate);
});

const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Welcome to the Paris 2024 Olympics events server 🏅");
});
app.listen(PORT, () => {
    console.log(`🚀 Listening on port ${PORT}`);
});
