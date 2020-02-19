// Установка компонентов даты. Функция, которая выводит день недели через n дней после указанной даты.

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Fr', 'St']
export const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay()];

};
const result = dayOfWeek(new Date(), 1);
console.log(result);