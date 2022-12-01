const ROOT = `${__dirname}/../`;

const test = (req, res) => {
    res.json({message: "Views 'Test' API Route successful.."});
};

const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: ROOT
    });
};

const login = (req, res) => {
    res.sendFile('/views/login.html', {
        root: ROOT
    });
};

const profile = (req, res) => {
    res.sendFile('/views/profile.html', {
        root: ROOT
    });
};

const signup = (req, res) => {
    res.sendFile('/views/signup.html', {
        root: ROOT
    });
};

module.exports = {
    test,
    root,
    login,
    profile,
    signup
}