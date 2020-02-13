/*DOM
В консоле на сайте выбрать стрелкой элемент на сайте, и потом  консоле нажать $0 - выведет этот элемент.
При добавлении к $.parntNode => $.parntNode.parntNode = > $.parntNode.parntNode.parntNode - выврдит родительскиие элементы вплоть до #document
window.innerWidth - покажет ширину окна браузера
window.innerHeight - покажет высоту окна браузера
$.clientWidth - покажет ширину последнего выбраного элемента в окне
$.clientHeight - покажет ширину последнего выбраного элемента в окне
document.querySelector('.class') - выведет первый элемент с таким классом
document.querySelectorAll('.class') - выведет колекцию элементов с таким классом. Это не массив, а псевдомассив. Но его можно превратить в массив - (...document.querySelectorAll('.class')) или Array.from(document.querySelectorAll('.class')).
document.queryById('.class') - возвращает один элемент
document.queryByName - редко
document.queryByTagName - редко
document.queryByClassName - редко
elem.closest('.class') - ищет ближайший элемент
elem.mathes('ul > li.selected')
elem.contains(elem)
$.innerHTML - строковое представление внутренннего HTML выбранного элемента
$.outerHTML - строковое представление внутренннего HTML выбранного элемента + сам выбранный элемент
*/

//TO DO LIST
const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];
const renderListItems = listItems => {
    const listElem = document.querySelector('.list'); // получить доступ к этому элементу
    // превращаем массив в массив объектов c html элементами
    const listItemElems = listItems
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
//