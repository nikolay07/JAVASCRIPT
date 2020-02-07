export function createLogger() {
    let logger = [];

    const warn = (warning) => {
        return logger.push({ message: warning, dateTime: new Date(), type: 'warn', });
    }

    const error = (error) => {
        return logger.push({ message: error, dateTime: new Date(), type: 'error', });
    }

    const log = (log) => {
        return logger.push({ message: log, dateTime: new Date(), type: 'log', })
    }

    const getRecords = (string) => {
        if (!string) { return logger };
        return logger.filter((a) => a.type === string).sort((a, b) => a.dateTime - b.dateTime);
    }
    return {
        warn,
        error,
        log,
        getRecords,
    }
}

/*
Напишите ф-цию, которая будет создавать логгеры

*/