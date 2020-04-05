import { setItem, getItem } from './storage.js'

export const listElem = document.querySelector('.list');
export function sortTask() {
    const tasksList = getItem('tasksList') || [];
    const sortedTask = tasksList.sort((a, b) => a.done - b.done);
    const sortTask = [];
    const done = sortedTask.filter(elem => elem.done === true).sort((a, b) => b.dateConfirmed - a.dateConfirmed);
    const notDone = sortedTask.filter(elem => elem.done === false).sort((a, b) => b.dateCreate - a.dateCreate);
    sortTask.push(...notDone, ...done);
    setItem('tasksList', sortTask);
    return sortTask;
}
export const renderListItems = () => {
    const tasksList = getItem('tasksList') || [];
    const listTasks = sortTask(tasksList);
    const listItemElems = listTasks
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            const checkboxElem = document.createElement('input');
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.classList.add('list__item');
            checkboxElem.setAttribute('type', 'checkbox');
            if (done) listItemElem.classList.add('list__item_done');
            checkboxElem.checked = done;
            listItemElem.append(checkboxElem, text);
            return listItemElem;
        });
    listElem.append(...listItemElems);
    return listItemElems;
};