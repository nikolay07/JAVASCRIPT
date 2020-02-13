/*События - part 1*/
// Задание обработчиков событий
//Самый простой - добавить прямо в html. Например, <div onclick = "console.log('Hi')" class = 'newclass'>...< /div>
// при нажатии на этот див выведет в консоль 'Hi'
//Второй способ назначения обработчиков событий - нужно получить ссылку на элемент - назначаем переменную и присваиваем ей класс дива: 
const elem = document.querySelector('.newclass');
elem.onclick = function() {
        console.log('Hi'); // при нажатии на этот див выведет в консоль 'Hi'
    }
    //Оба способа одинаковые. Но с ними нельзя повесить 2 и более обработчика на один элемент. НА ПРАКТИКЕ ПОЧТИ НЕ ИСПОЛЬЗУЮТ!
    // На практике используют addEventListener - он принимает 3 аргумента: 1) название события; 2) функция, срабатывающая на это событие; 3) объект настроек {} (потом раскажет); . Главное преимущество - их можно отменять.
const elem = document.querySelector('.newclass');
const sayHi = () => { console.log('Hi') };
const sayHello = () => { console.log('Hello') };
elem.addEventListener('click', sayHi); // Hi выведет в консоль при нажатии на див
elem.addEventListener('click', sayHello); // Hi Hello выведет в консоль оба назначения при нажатии на див
elem.removeEventListener('click', sayHi) // Отменит вывод Hi  в консоль при нажатии на див
______________________________________________________________
// Выводим обработчики которые сработали в отдельное окно
const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.event - list');
    eventsListElem.innerHTML = `<span style = "color: ${color}">${text}</span>`; // вставляем спан с текстом и цветом
}
const logGreenDiv = () => { logTarget("DIV", "green") };
// или можно так  const logGreenDiv = logTarget.bind(null, "DIV", "green");
elem.addEventListener('click', logGreenDiv); // выведет один раз в окно текст "DIV" зеленого цвета.
// если eventsListElem.innerHTML +=  будет добавлятся  "DIV" на каждый клик
//innerHTML используем только для вывода наших данных. У него есть проблемы с безопасностью - если в вводе даных участвует пользователь нужно использовать textContent - текст вставиться как есть без преобразований.
//-------------------------------------------------------------
// Всплытие свойств - когда нажимаешь на вложенний элемент  - отрабатывает и родительский(если ему указано такое же действие)
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.event - list');
    eventsListElem.innerHTML = `<span style = "color: ${color}">${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");


divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);
/*чтобы прервать всплытие можно ввести 
pElem.addEventListener('click', event => {logGreenP();
    event.stopPropagation();
});

*/