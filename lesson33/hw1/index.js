const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks'
const getTaskList = (baseUrl) => {
    return fetch(baseUrl).then(respolve => {
        return respolve.json()
    })
}
getTaskList(baseUrl)
    .then(taskList => console.log(taskList))
    .catch((error) => console.log(error))