const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flightDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const flightSchema = new mongoose.Schema({
    from: String,
    to: String,
    airline: String,
    aircraft: String,
    duration: String
});

const Flight = mongoose.model('Flight', flightSchema);


async function seedDatabase() {
    try {
        
        await Flight.deleteMany({});
        
        
        const flights = [
            { from: "Sydney", to: "Melbourne", airline: "Qantas", aircraft: "Boeing 737", duration: "1h 30m" },
            { from: "Brisbane", to: "Perth", airline: "Virgin", aircraft: "Airbus A330", duration: "5h 10m" },
            { from: "Adelaide", to: "Darwin", airline: "Jetstar", aircraft: "Airbus A320", duration: "3h 45m" }
        ];
        
        await Flight.insertMany(flights);
        console.log('Data Inserted Successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();