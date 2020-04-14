const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status >= 400) { // запрос больше 400
                reject(xhr.response);
            } else { resolve(xhr.response); }
            //console.log(JSON.parse(xhr.response));
        }
        xhr.onerror = () => {
            reject(new Error('Error'));
        }
        xhr.send(JSON.stringify(body));
    })
}
// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch((error) => console.log(error))
const body = {
    name: 'Valadilen',
    age: 26,
};
sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch((error) => console.log(error))