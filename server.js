const express = require('express');
const app = express();
const PORT = process.env.PORT || 4002;

const routes = require('./routes');

// Serve Static
app.use(express.static(`${__dirname}/public`));

// SECTION View Routes
app.use('/', routes.views);

app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}..`);
});