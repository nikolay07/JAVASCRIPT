/*Всплытие и погружение событий. Написать инструмент для демонстрации работы событый*/

const elemDiv = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

const getClick = (text, color) => {
    const eventList = document.querySelector('.events-list');
    eventList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const showGreenDiv = getClick.bind(null, 'DIV', 'green');
const showGreenP = getClick.bind(null, 'P', 'green');
const showGreenSpan = getClick.bind(null, 'SPAN', 'green');

const showGreyDiv = getClick.bind(null, 'DIV', 'grey');
const showGreyP = getClick.bind(null, 'P', 'grey');
const showGreySpan = getClick.bind(null, 'SPAN', 'grey');

elemDiv.addEventListener('click', showGreyDiv, true);
elemDiv.addEventListener('click', showGreenDiv);

elemP.addEventListener('click', showGreyP, true);
elemP.addEventListener('click', showGreenP);

elemSpan.addEventListener('click', showGreySpan, true);
elemSpan.addEventListener('click', showGreenSpan);