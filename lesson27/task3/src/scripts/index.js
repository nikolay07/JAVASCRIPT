import { setItem, getItem } from './storage.js'
import { createNewTask } from './createTask.js';
import { getChecked } from './updateTask.js';
import { renderListItems, sortTask, listElem } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderListItems();
});

const onStorageChange = e => {
    if (e.key === 'tasksList') {
        listElem.innerHTML = '';
        renderListItems();
    }
}

window.addEventListener('storage', onStorageChange)