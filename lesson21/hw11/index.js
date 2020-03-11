export const squaredNumbers = () => Array
    .from(document.querySelectorAll('.number'))
    .forEach(elem => elem.setAttribute('data-squared-number', Math.pow(elem.dataset.number, 2)));