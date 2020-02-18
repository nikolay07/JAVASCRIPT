/*Todo List/ Список дел - добавление, изменение дел - part 1*/
const tasks = [
    { text: 'Buy milk', done: false, date: new Date },
    { text: 'Pick up Tom from airport', done: false, date: new Date },
    { text: 'Visit party', done: false, date: new Date },
    { text: 'Visit doctor', done: true, date: new Date },
    { text: 'Buy meat', done: true, date: new Date },
];
const createNewTask = () => {
    const task = document.querySelector('.task-input');
    if (task.value == '') return;
    const newTask = {
        text: task.value,
        done: false,
        date: new Date,
    }
    tasks.push(newTask);
    getListItems(tasks);
    task.value = '';
};
const createTaskButton = document.querySelector('.create-task-btn');
createTaskButton.addEventListener('click', createNewTask);


const getListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';
    const listItemElems = listItems
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
            cheboxElem.classList.add('list__item-checkbox');
            cheboxElem.checked = done;
            listItemElem.append(cheboxElem, text);
            cheboxElem.setAttribute('id', date)

            function getChecked() {
                const id = this.id;
                const idByTask = tasks.find(a => a.date == id);
                idByTask.done = this.checked;
                getListItems(tasks);
            }
            cheboxElem.addEventListener('click', getChecked);
            return listItemElem;
        });
    listElem.append(...listItemElems);
};
getListItems(tasks);