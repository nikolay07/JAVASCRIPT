/*Список дел - добавление, изменение дел - part 1. Добавить возможность создавать дела и отмечать как выполненые / не выполненные*/
const tasks = [
    { text: 'Buy milk', done: false, date: new Date },
    { text: 'Pick up Tom from airport', done: false, date: Date.now() },
    { text: 'Visit party', done: false, date: new Date },
    { text: 'Visit doctor', done: false, date: new Date },
    { text: 'Buy meat', done: false, date: new Date },
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

const createNewElem = () => {
    const task = document.querySelector('.task-input');
    const newTask = { text: value, done: false, date: new Date };
    if (newTask.text == '') { return };
    tasks.push(newTask);
    task.value = '';
};
const clickToCreate = document.querySelector('.create-task-btn');
clickToCreate.addEventListener('click', createNewElem);

getListItems(tasks);


//'click' checkbox = done: true
//Create btn('click', func)
//func = create new task(text) + add to list. Clear task-input(task-input ='')
//if (task(text)="") break
//sort done, sort byDate