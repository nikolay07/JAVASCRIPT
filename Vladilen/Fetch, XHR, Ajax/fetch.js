const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-type': 'application/json'
    };
    return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers,
        })
        .then(response => {
            if (response.status <= 400) {
                return response.json()
            } else {
                return response.json().then(error => {
                    const someError = new Error('Чето не так');
                    someError.data = error;
                    throw someError;
                })
            }

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