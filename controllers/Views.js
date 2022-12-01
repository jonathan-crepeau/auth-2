const ROOT = `${__dirname}/../`;

const test = (req, res) => {
    res.json({message: "Views 'Test' API Route successful.."});
};

const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: ROOT
    });
};

module.exports = {
    test,
    root
}