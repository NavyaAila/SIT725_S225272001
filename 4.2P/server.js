const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flightDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('✅ Connected to MongoDB!');
});


const flightSchema = new mongoose.Schema({
    from: String,
    to: String,
    airline: String,
    aircraft: String,
    duration: String
});

const Flight = mongoose.model('Flight', flightSchema);

// API
app.get('/api/flights', async (req, res) => {
    try {
        const flights = await Flight.find({});
        res.json({ statusCode: 200, data: flights, message: 'Success' });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: 'Error fetching flights' });
    }
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'home.html'));
});

app.listen(PORT, () => {
    console.log(`✈️ Server: http://localhost:${PORT}`);
});