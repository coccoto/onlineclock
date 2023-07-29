const PathController = require(ROOT + '/server/src/controllers/pathController')

module.exports = (app) => {
    app.route(['/', '/timer', '/stopwatch']).get((req, res) => {
        res.sendFile(ROOT + '/client/dist/index.html')
        return
    })

    app.route('/api/getMstMenu').post(async (req, res) => {
        const pathController = new PathController()
        const result = await pathController.main()
        res.json({result: result})
        return
    })
}