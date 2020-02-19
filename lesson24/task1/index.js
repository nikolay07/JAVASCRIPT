// Установка компонентов даты
const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Fr', 'St']
const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay()];

};
const result = dayOfWeek(new Date(), n);
console.log(result);