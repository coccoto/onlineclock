module.exports = (app) => {
    app.route('*').get((req, res) => {
        res.sendFile(ROOT + '/dist/index.html')
        return
    })
}