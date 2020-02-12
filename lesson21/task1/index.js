const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];
const renderListItems = listItems => {
    const listElem = document.querySelector('.list'); // получаем доступ к этому элементу

    const listItemElems = listItems // превращаем массив в массив объектов c html элементами
        .sort((a, b) => a.done - b.done) //сортируем чтоб выбранные дела были в конце
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li'); // формируем элементы которые будем вставлять
            listItemElem.classList.add('list__item'); // добавляем этому элементу класс
            if (done) { //если дело выполнено добавляем класс на выбранный элемент
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input'); // создать чекбокс
            checkboxElem.setAttribute('type', 'checkbox'); //устанавливаем checkbox атрибут type(чтом иожно поставить галочки);
            checkboxElem.checked = done; //устанавливаем галочки выбранным  done: true;
            checkboxElem.classList.add('list__item-checkbox'); // добавляем этому элементу класс
            listItemElem.append(checkboxElem, text); // добавляем этому элементу чекбокс и текст
            return listItemElem; // получим массив элементов списка, готовых к вставке на страницу

        });
    listElem.append(...listItemElems);
};
renderListItems(tasks);