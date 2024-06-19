import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());

const DATA_FILE = './data/uefa.json';

// Function to read data from the file
function readData() {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.matches;  // Access the matches key directly
}

// Endpoint to get all matches
app.get('/matches', (req, res) => {
    const data = readData();
    res.json(data);
});

// Endpoint to get matches by date
app.get('/matches/:date', (req, res) => {
    const data = readData();
    const matchesOnDate = data.find(match => match.date === req.params.date);
    if (!matchesOnDate) {
        return res.status(404).send('No matches found for this date. Error 404.');
    }
    res.json(matchesOnDate);
});

const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Welcome to the Euro 2024 matches server ⚽");
});
    app.listen (8080, () => {
        console.log(`🚀 Listening on port ${PORT}`);
    });
