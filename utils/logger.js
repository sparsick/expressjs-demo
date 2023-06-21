var winston = require('winston');

var logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            handleExceptions: true,
            json: true,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
