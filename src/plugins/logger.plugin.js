import winston from "winston";


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [


        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),

    ],

});


export function buildLogger(service) {
    return {
        log: (message) => {
            logger.log('info', { message, service })
        }

    }
}


// if(process.env.NODE_ENV !=='produccion'){}