import { renderListItems, listElem } from './renderer.js';
import { sortTask } from './renderer.js'
import { setItem, getItem } from './storage.js'

const checkboxAllElem = document.querySelector('.list');

export const getChecked = (event) => {
    const listTaskNow = event.target.closest('.list__item');
    listTaskNow.classList.toggle('list__item_done')
    const tasksList = getItem('tasksList');
    doneTask(tasksList, listTaskNow);
    setItem('tasksList', tasksList);
    listElem.innerHTML = '';
    renderListItems(sortTask());
}
checkboxAllElem.addEventListener('click', getChecked);

const doneTask = (listTask, checkboxItem) => {
    listTask.forEach(elem => {
        if (elem.text === checkboxItem.textContent) {
            elem.done = !elem.done;
        }
    });
};