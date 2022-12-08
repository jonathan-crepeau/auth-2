const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const PORT = process.env.PORT || 4002;

const routes = require('./routes');
const logger = require('./middleware/utils');
// const cookieLogger = require('./middleware/cookieLogger');


// Serve Static
app.use(express.static(`${__dirname}/public`));

// SECTION Middleware
app.use(logger);
// app.use(cookieLogger)
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// SECTION User Session
app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://jonathan-crepeau:my-password@authocluster0.zfoiawz.mongodb.net/auth-app2?retryWrites=true&w=majority"
    }),
    secret: 'catattack',
    resave: false,
    saveUninitialized: false,
    cookie: {
    }
}));

// SECTION View Routes
app.use('/', routes.views);

// SECTION API Endpoint Routes
app.use('/api/v1', routes.api);

// Start Server
app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}..`);
});