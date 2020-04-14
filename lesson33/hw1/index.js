const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks'
    /* getTaskById code here */
const getTasksList = () => {
        return fetch(baseUrl)
            .then(response =>
                response.json());
    }
    //getTasksList(baseUrl).then(result => console.log(result))
    /* getTaskById code here */

const getTaskById = taskId => {
    return fetch(`${baseUrl}/${taskId}`)
        .then(response => response.json())
};
//getTaskById('2').then(result => console.log(result))


export { getTasksList, getTaskById }