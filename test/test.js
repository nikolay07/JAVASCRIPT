fetch('https://my-json-server.typicode.com/nikolay07/server')
    .then(res => res.json(12))
    .then(data => console.log(data))
    .catch(() => console.log('Some error'));