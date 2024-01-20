const mysql = require('mysql2/promise')
const loggerManager = require(ROOT + '/server/core/LoggerManager')

module.exports = class {

    constructor() {
        this.db = null
    }

    async connect() {
        try {
            if (! process.env['HOST'] || ! process.env['USER'] || ! process.env['PASSWORD'] || ! process.env['DATABASE']) {
                throw new Error('The .env file is not configured.')
            }

            const conn = await mysql.createConnection({
                host: process.env['HOST'],
                user: process.env['USER'],
                password: process.env['PASSWORD'],
                database: process.env['DATABASE'],
            })
            this.db = conn

        } catch (error) {
            loggerManager.error('Failed to connect to database. Error: ' + error.message)
            throw error
        }
    }

    async disconnect() {
        try {
            if (this.db === null) {
                throw new Error('No active database connection to disconnect.')
            }
            await this.db.end()

        } catch (error) {
            loggerManager.error('Failed to disconnect from the database. Error: ' + error.message)
            throw error
        }
    }

    async select(query) {
        try {
            if (this.db === null) {
                throw new Error('Database connection is not established.')
            }
            const [rows] = await this.db.execute(query)
            return rows

        } catch (error) {
            loggerManager.error('Failed to execute the SELECT. Error: ' + error.message)
            throw error;
        }
    }
}
