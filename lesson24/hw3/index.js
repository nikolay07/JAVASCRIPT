// const tasks = [
//     { text: 'Buy milk', done: false, dateStart: new Date(2020, 01, 15), dateEnd: undefined, id: 4 },
//     { text: 'Pick up Tom from airport', done: false, dateStart: new Date(2020, 01, 14), dateEnd: undefined, id: 3 },
//     { text: 'Visit party', done: false, dateStart: new Date(2020, 01, 13), dateEnd: undefined, id: 2 },
//     { text: 'Visit doctor', done: true, dateStart: new Date(2020, 01, 12), dateEnd: undefined, id: 1 },
//     { text: 'Buy meat', done: true, dateStart: new Date(2020, 01, 11), dateEnd: undefined, id: 0 },
// ];

// function createNewTask() {
//     if (task.value == '') return;
//     const newTask = {
//         text: task.value,
//         done: false,
//         dateStart: new Date(),
//         dateEnd: undefined,
//         id: tasks.length,
//     }
//     tasks.push(newTask);
//     renderListItems(tasks);
//     task.value = '';
// };
// const task = document.querySelector('.task-input');
// const createTaskButton = document.querySelector('.create-task-btn');
// createTaskButton.addEventListener('click', createNewTask);

// const listElem = document.querySelector('.list');

// function renderListItems(tasks) {
//     listElem.innerHTML = '';
//     const listItemElems = tasks
//         .sort((a, b) => b.dateStart - a.dateStart)
//         .sort((a, b) => a.done - b.done)
//         .sort((a, b) => b.dateEnd - a.dateEnd)
//         .map(({ text, done, id }) => {
//             const listItemElem = document.createElement('li');
//             listItemElem.classList.add('list__item');
//             const cheboxElem = document.createElement('input');
//             cheboxElem.setAttribute('type', 'checkbox');
//             cheboxElem.checked = done;
//             if (done) { listItemElem.classList.add('list__item_done'); };
//             cheboxElem.classList.add('list__item-checkbox');
//             listItemElem.append(cheboxElem, text);
//             listItemElem.setAttribute('id', id);
//             listElem.addEventListener('click', getChecked);
//             return listItemElem;
//         });
//     listElem.append(...listItemElems);
// };

// function getChecked(event) {
//     const task = tasks.find(elem => elem.id === +event.target.parentElement.id);
//     task.done = event.target.checked;
//     task.dateEnd = task.done ? new Date() : undefined;
//     renderListItems(tasks);
// };

// renderListItems(tasks);


const tasks = [
    { text: 'Buy milk', done: false, date: Date.now(), dateCheck: undefined },
    { text: 'Pick up Tom from airport', done: false, date: Date.now() + 1, dateCheck: undefined },
    { text: 'Visit party', done: false, date: Date.now() + 2, dateCheck: undefined },
    { text: 'Visit doctor', done: true, date: Date.now() + 3, dateCheck: this.date + 1 },
    { text: 'Buy meat', done: true, date: Date.now() + 4, dateCheck: this.date + 1 },
]

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';
    // const notDoneItemsElements = listItems.filter(elem => elem.done === false)
    //     .sort((a, b) => b.date - a.date);
    // const yesDoneItemsElements = listItems.filter(elem => elem.done === true)
    //     .sort((a, b) => b.date - a.date);
    // let finalArrayOfItems = [...notDoneItemsElements, ...yesDoneItemsElements]

    const listItemsElems = listItems.sort((a, b) => b.done - a.done)
        .map(({ text, done, date }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const cheboxElem = document.createElement('input');
            cheboxElem.setAttribute('type', 'checkbox');
            cheboxElem.setAttribute('id', `${date}`)
            cheboxElem.classList.add('list__item-checkbox');
            cheboxElem.checked = done;
            cheboxElem.addEventListener('click', trigerCheckbox);
            listItemElem.append(cheboxElem, text);

            return listItemElem;
        });
    return listElem.append(...listItemsElems);
}

////////////////////////////////
let addNewItem = () => {
    const nameOfTask = document.querySelector('.task-input');
    if (nameOfTask.value == '') return;
    let newTask = {
        text: nameOfTask.value,
        done: false,
        date: Date.now() + tasks.length,
        dateCheck: undefined
    }
    let lengthOfDone = tasks.filter(elem => elem.done).length

    tasks.splice(lengthOfDone, 0, newTask);
    renderListItems(tasks);
    nameOfTask.value = '';
}
let createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addNewItem);
///////////////////////////
function trigerCheckbox() {
    let id = this.id;
    let oneTask = tasks.find(elem => elem.date == id);
    console.log(oneTask);
    console.log(this.checked);
    oneTask.done = this.checked;
    oneTask.dateCheck = Date.now();

    renderListItems(tasks);
}
renderListItems(tasks);