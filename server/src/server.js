const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = 8000;

const Mongo_URL = 'mongodb+srv://nasa-api:jxNFcx5a3DGE3OPq@nasacluster.wjqc0sa.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(Mongo_URL);
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();