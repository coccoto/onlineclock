const loggerManager = require(ROOT + '/server/core/LoggerManager')
const MenuListController = require(ROOT + '/server/src/controllers/MenuListController')

module.exports = (app) => {
    
    app.route(['/', '/timer', '/stopwatch']).get((req, res) => {
        res.sendFile(ROOT + '/client/dist/index.html')
        return
    })

    app.route('/api/get/menu-list').post(async (req, res) => {
        console.log('TEST')
        const endpoint = req.url
        try {
            const menuListController = new MenuListController(req, res)
            res = await menuListController.main()
            return
        } catch (error) {
            loggerManager.error(`Error in ${endpoint} route. Error: ${error}`)
            return
        } 
    })
}
