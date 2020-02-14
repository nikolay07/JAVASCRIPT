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

elemDiv.addEventListener('click', showGreyDiv, true); // .addEventListener() регистрирует обработчик события
elemDiv.addEventListener('click', showGreenDiv);

elemP.addEventListener('click', showGreyP, true);
elemP.addEventListener('click', showGreenP);

elemSpan.addEventListener('click', showGreySpan, true);
elemSpan.addEventListener('click', showGreenSpan);

const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handles-btn');
const attachBtn = document.querySelector('.attach-handles-btn');

const getClickBtn = () => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML = ''; //очищет содержимое класса .events-list
};
const getRemove = () => {
    elemDiv.removeEventListener('click', showGreyDiv, true); //удаляет обработчик события зарегистрированного ранее с помощью addEventListener()
    elemDiv.removeEventListener('click', showGreenDiv);

    elemP.removeEventListener('click', showGreyP, true);
    elemP.removeEventListener('click', showGreenP);

    elemSpan.removeEventListener('click', showGreySpan, true);
    elemSpan.removeEventListener('click', showGreenSpan);

};
const getAttach = () => {
    elemDiv.addEventListener('click', showGreyDiv, true);
    elemDiv.addEventListener('click', showGreenDiv);

    elemP.addEventListener('click', showGreyP, true);
    elemP.addEventListener('click', showGreenP);

    elemSpan.addEventListener('click', showGreySpan, true);
    elemSpan.addEventListener('click', showGreenSpan);
};

clearBtn.addEventListener('click', getClickBtn);
removeBtn.addEventListener('click', getRemove);
attachBtn.addEventListener('click', getAttach);