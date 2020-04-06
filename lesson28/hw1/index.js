export const shmoment = date => {
    let currentDate = new Date(date);
    const objOfDates = {
        add(name, value) {
            if (name === 'years') { currentDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + value)) };
            if (name === 'months') { currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + value)) };
            if (name === 'days') { currentDate = new Date(currentDate.setDate(currentDate.getDate() + value)) };
            if (name === 'hours') { currentDate = new Date(currentDate.setHours(currentDate.getHours() + value)) };
            if (name === 'minutes') { currentDate = new Date(currentDate.setMinutes(currentDate.getMinutes() + value)) };
            if (name === 'seconds') { currentDate = new Date(currentDate.setSeconds(currentDate.getSeconds() + value)) };
            if (name === 'milliseconds') { currentDate = new Date(currentDate.setMilliseconds(currentDate.getMilliseconds() + value)) };
            return this;
        },
        subtract(name, value) {
            if (name === 'years') { currentDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - value)) };
            if (name === 'months') { currentDate = new Date(currentDate.setMonth(currentDate.getMonth() - value)) };
            if (name === 'days') { currentDate = new Date(currentDate.setDate(currentDate.getDate() - value)) };
            if (name === 'hours') { currentDate = new Date(currentDate.setHours(currentDate.getHours() - value)) };
            if (name === 'minutes') { currentDate = new Date(currentDate.setMinutes(currentDate.getMinutes() - value)) };
            if (name === 'seconds') { currentDate = new Date(currentDate.setSeconds(currentDate.getSeconds() - value)) };
            if (name === 'milliseconds') { currentDate = new Date(currentDate.setMilliseconds(currentDate.getMilliseconds() - value)) };
            return this;
        },
        result() {
            return currentDate;
        },
    }
    return objOfDates;
};
const someDate = shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result();
console.log(someDate);