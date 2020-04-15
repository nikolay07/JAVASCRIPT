const baseUrl = 'https://crudcrud.com/api/47ed6cc0ec434b54ba59e3dbbd6dfabd/tasks';

function mapTasks(tasks) {
    return tasks.map(({ _id, ...rest }) => ({...rest, id: _id }));
};

export function getTasksList() {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

export function creatTask(taskData) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    })
};

export function updateTask(taskId, updatedTaskData) {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updatedTaskData),
    })
};

export function deleteTask(taskId) {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
};