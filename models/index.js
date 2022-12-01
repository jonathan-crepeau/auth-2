const mongoose = require('mongoose');
const mongoDB_URI = "mongodb+srv://jonathan-crepeau:my-password@authocluster0.zfoiawz.mongodb.net/auth-app2?retryWrites=true&w=majority";

mongoose.connect(mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Initial DB connection successful..'))
    .catch((error) => console.log(error));

module.exports = {
    User: require('./User')
};