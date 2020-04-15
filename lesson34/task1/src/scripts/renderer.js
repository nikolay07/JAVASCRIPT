import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const createCheckbox = ({ done, id }) => {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list-item__checkbox');
    return checkboxElem;
}

const createListItem = ({ text, done, id }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list-item');
    if (done) listItemElem.classList.add('list-item_done');
    const textElem = document.createElement('span');
    textElem.classList.add('list-item__text');
    textElem.textContent = text;
    const checkboxElem = createCheckbox({ done, id });
    const deleteBtnElem = document.createElement('button');
    deleteBtnElem.classList.add('list-item__delete-btn');
    listItemElem.append(checkboxElem, textElem, deleteBtnElem);

    return listItemElem;
};

export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
        .sort((a, b) => new Date(b.finishDate) - new Date(a.finishDate))
        .sort((a, b) => a.done - b.done)
        .map(createListItem);

    listElem.append(...tasksElems);
};