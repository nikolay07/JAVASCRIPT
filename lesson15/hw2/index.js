export function createLogger() {
    let logger = [];

    const warn = (warning) => {
        return logger.push({ message: warning, dateTime: new Date(), type: 'warn', });
    }

    const error = (error) => {
        return logger.push({ message: error, dateTime: new Date(), type: 'error', });
    }

    const log = (message) => {
        return logger.push({ message, dateTime: new Date(), type: 'log', })
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
Основные требования
1. Из файла index.js должна экспортироваться ф-ция с именем createLogger
2. createLogger должна вернуть логгер с методами:
warn - принимает ворнинг в виде строки и записывает в память
error - принимает ошибку в виде строки и записывает в память
log - принимает сообщение в виде строки и записывает в память
getRecords - принимает строку 'warn' или 'error' или 'log' и возвращает соответственно
ворнинги, ошибки или логи в формате { message: [сохраненное сообщение], dateTime:
[время регистрации сообщения], type: [тип записи] }, где type - 'warn' или 'error' или 'log'
getRecords возвращает все сообщения (всех типов), если аргумент не передан
getRecords должен вернуть сообщения в виде массива, отсортированному по времени по
убыванию (новые сообщения в массиве идут первыми)
getRecords должен возвращать пустые массивы, если сообщений соответствующего типа
не поступало
3. Логгеры, созданные с помощью createLogger должны быть независимы друг от друга (у
каждого своя память)*/