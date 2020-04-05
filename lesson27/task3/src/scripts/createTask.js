import { setItem, getItem } from './storage.js'
import { renderListItems, listElem } from './renderer.js';

const btnCreateTask = document.querySelector('.create-task-btn');
let task = document.querySelector('.task-input')
btnCreateTask.addEventListener('click', createNewTask);

export function createNewTask() {
    if (task.value == '') return;
    const tasksList = getItem('tasksList') || [];
    tasksList.push({
        text: task.value,
        dateCreate: new Date(),
        done: false,
    });
    task.value = '';
    setItem('tasksList', tasksList);
    listElem.innerHTML = '';
    renderListItems();
};