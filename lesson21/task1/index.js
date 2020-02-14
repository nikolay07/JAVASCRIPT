/*Todo List/ Список дел - добавление, изменение дел - part 1*/
const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];
const getListItems = listItems => {
    const listElem = document.querySelector('.list');
    const listItemElems = listItems.sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);
            return listItemElem;

        });
    listElem.append(...listItemElems);
};
getListItems(tasks);
/*
const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];
const getListItems = listItems => {
    const listElem = document.querySelector('.list'); //назначаем класс (.list) в переменную listElem;
    const listItemElems = listItems.sort((a, b) => a.done - b.done) // сортируем массив tasks по ключу объекта done;
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li'); //cоздаёт новый элемент(.createElement) с тегом li;
            listItemElem.classList.add('list__item'); //добавляем новый класс (.classList.add) к li;
            if (done) {
                listItemElem.classList.add('list__item_done'); // если значение ключа done=true - добавляем новый класс к этому тегу li;
            }
            const checkboxElem = document.createElement('input'); //cоздаёт новый элемент тип input (.createElement) ;
            checkboxElem.setAttribute('type', 'checkbox'); //  устанавливает атрибут type='checkbox' для input;
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox'); //добавляем новый класс к input;
            listItemElem.append(checkboxElem, text); // вставляем в элемент li: созданныый input(checkboxElem) c текстом (text)
            console.log(listItemElem);
            return listItemElem;

        });
    listElem.append(...listItemElems); //вставляем в переменную listElem деструктурированый listItemElems;
};
getListItems(tasks);
console.log(getListItems(tasks));
//
*/