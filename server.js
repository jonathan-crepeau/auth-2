const express = require('express');
const app = express();
const PORT = process.env.PORT || 4002;

const routes = require('./routes');
const logger = require('./middleware/utils');

// Serve Static
app.use(express.static(`${__dirname}/public`));

// SECTION Middleware
app.use(logger);
app.use(express.json());

// SECTION View Routes
app.use('/', routes.views);

// SECTION API Endpoint Routes
app.use('/api/v1', routes.api);

app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}..`);
});