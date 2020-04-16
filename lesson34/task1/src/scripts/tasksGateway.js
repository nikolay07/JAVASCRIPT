const baseUrl = 'https://crudcrud.com/api/47ed6cc0ec434b54ba59e3dbbd6dfabd/tasks';

const mapTasks = tasks =>
    tasks.map(({ id, ...rest }) => ({...rest, id: id }));

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
}

export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
}

export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
}