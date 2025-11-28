const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('client'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/home.html');
});

app.get('/api/routes', (req, res) => {
    res.json([
        { from: "Sydney", to: "Melbourne", airline: "Qantas", aircraft: "Boeing 737", duration: "1h 30m" },
        { from: "Brisbane", to: "Perth", airline: "Virgin", aircraft: "Airbus A330", duration: "5h 10m" },
        { from: "Adelaide", to: "Darwin", airline: "Jetstar", aircraft: "Airbus A320", duration: "3h 45m" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});