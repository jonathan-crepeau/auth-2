const express = require('express');
const app = express();
const PORT = process.env.PORT || 4002;

app.get('/', (req, res) => {
    res.send('<h1>Auth App 2</h1>');
});

app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}..`);
});