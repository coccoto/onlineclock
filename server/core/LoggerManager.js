const winston = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file')

const transports = () => {

    if (! process.env['ENVIRONMENT'] || ! process.env['LOG_DIR']) {
        throw new Error('The .env file is not configured.')
    }

    switch (process.env['ENVIRONMENT']) {
        case 'development':
            return [
                new winston.transports.Console(),
                new DailyRotateFile({
                    filename: process.env['LOG_DIR'] + '/%DATE%.log',
                    datePattern: 'YYYY-MM',
                }),
            ]
        case 'production':
            return [
                new DailyRotateFile({
                    filename: process.env['LOG_DIR'] + '/%DATE%.log',
                    datePattern: 'YYYY-MM',
                }),
            ]
        default:
            throw new Error(`[ERROR] Invalid environment. process.env['ENVIRONMENT']: ${process.env['ENVIRONMENT']}`);
    }
}

const loggerManager = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.printf(({ level, message, timestamp }) => {
            return JSON.stringify({timestamp: timestamp, level: level, message: message})
        }),
    ),
    transports: transports()
})

module.exports = loggerManager
