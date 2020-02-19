//Форматирование даты - part 1. Функция, которая возвращает время в Гринвиче.
const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
});
export const getGreenwichTime = date => formatter.format(date);
console.log(getGreenwichTime(new Date()));