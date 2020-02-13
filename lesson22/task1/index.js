/*Всплытие и погружение событий. Написать инструмент для демонстрации работы событый*/

const elemDiv = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

const logTarget = (text, color) => {
    const eventListElem = document.querySelector('.events-list');
    eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

elemDiv.addEventListener('click', logGreyDiv, true);
elemDiv.addEventListener('click', logGreenDiv);

elemP.addEventListener('click', logGreyP, true);
elemP.addEventListener('click', logGreenP);

elemSpan.addEventListener('click', logGreySpan, true);
elemSpan.addEventListener('click', logGreenSpan);