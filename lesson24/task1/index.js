// Установка компонентов даты. Функцию, которая выведет день недели через n дней после указанной даты.

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Fr', 'St']
export const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay()];

};
const result = dayOfWeek(new Date(), n);
console.log(result);