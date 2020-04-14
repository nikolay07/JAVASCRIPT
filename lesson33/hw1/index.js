const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks'
    /* getTaskById code here */
const getTaskList = (baseUrl) => {
    return fetch(baseUrl).then(response => {
        return response.json()
    })
};
//getTaskList(baseUrl).then(result => console.log(result))
/* getTaskById code here */

const getTaskById = taskId => {
    return fetch(`${baseUrl}/${taskId}`)
        .then(response => response.json())
};
//getTaskById('2').then(result => console.log(result))


export { getTaskList, getTaskById }