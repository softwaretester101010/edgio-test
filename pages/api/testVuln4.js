app.get('/unsafe', function (req, res) {
    let param = req.query.userInput;
    res.send('Hello ' + param);
});