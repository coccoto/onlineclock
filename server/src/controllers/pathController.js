const PathModel = require(ROOT + '/server/src/models/pathModel')

module.exports = class {

    async getMstMenu() {
        const pathModel = new PathModel()
        await pathModel.connect()
        return await pathModel.getMstMenu()
    }

    async main() {
        return await this.getMstMenu()
    }
}