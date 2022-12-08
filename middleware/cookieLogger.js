const cookieLogger = (req, res, next) => {
    if (typeof req.cookies['connect.sid'] !== 'undefined') {
        console.log(req.cookies['connect.sid']);
    }
    next();
}

module.exports = cookieLogger;