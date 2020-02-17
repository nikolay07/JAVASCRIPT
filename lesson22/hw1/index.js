/*Список дел - добавление, изменение дел - part 1. Добавить возможность создавать дела и отмечать как выполненые / не выполненные*/

//Список задач по умолчанию
const tasks = [
    { text: 'Buy milk', done: false, date: Date.now(), },
    { text: 'Pick up Tom from airport', done: false, date: Date.now() + 0.1, },
    { text: 'Visit party', done: false, date: Date.now() + 0.2, },
    { text: 'Visit doctor', done: true, date: Date.now() + 0.3, },
    { text: 'Buy meat', done: true, date: Date.now() + 0.4, },
];

//Создать новую задачу
const createNewTask = () => {
    const task = document.querySelector('.task-input');
    if (task.value == '') return;
    const newTask = {
        text: task.value,
        done: false,
        date: Date.now(),
    }
    tasks.push(newTask);
    getListItems(tasks);
    task.value = '';
};
const createTaskButton = document.querySelector('.create-task-btn');
createTaskButton.addEventListener('click', createNewTask);

//Сортируем, очищаем, обновляем список задач
const getListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

    const listItemsElems = listItems
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, date }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const cheboxElem = document.createElement('input');
            cheboxElem.setAttribute('type', 'checkbox');
            cheboxElem.setAttribute('id', date)
            cheboxElem.classList.add('list__item-checkbox');
            cheboxElem.checked = done;
            cheboxElem.addEventListener('click', getChecked);
            listItemElem.append(cheboxElem, text);
            return listItemElem;
        });
    return listElem.append(...listItemsElems);
}

function getChecked() {
    let id = this.id;
    let idTask = tasks.find(a => a.date == id);
    idTask.done = this.checked;
    getListItems(tasks);
}

getListItems(tasks);