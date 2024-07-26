const winston = require('winston');
const { format, transports } = winston;
const DailyRotateFile = require('winston-daily-rotate-file');

const levels = {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    http: 4,
    debug: 5,
};

const level = () => {
    const env = process.env.NODE_ENV || 'development';
    return env === 'development' ? 'debug' : 'info';
};

const formatConsole = format.combine(
    format.colorize(),
    format.simple()
);

const formatFile = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

const transportsList = [
    new transports.Console({
        level: 'debug',
        format: formatConsole,
    }),
    new DailyRotateFile({
        filename: 'logs/errors-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        level: 'error',
        format: formatFile,
        maxFiles: '14d',
    }),
];

const logger = winston.createLogger({
    levels,
    level: level(),
    format: formatFile,
    transports: transportsList,
});

module.exports = logger;