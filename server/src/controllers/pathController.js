const PathModel = require(ROOT + '/server/src/models/pathModel')

module.exports = class {

    async getMstPath() {
        const pathModel = new PathModel()
        await pathModel.connect()
        return await pathModel.getMstPath()
    }

    async main() {
        return await this.getMstPath()
    }
}