fetch('https://github.com/nikolay07/server/blob/master/db.json')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(() => console.log('Some error'));