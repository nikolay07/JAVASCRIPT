let message = 'Just learn it';

function sendMessage(name) {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}! Your ${sender}`)
}
sendMessage('Ann');

function setMessage(newMassage) {
    message = newMassage;
}
setMessage('Good job');
sendMessage('Ann');

/*
Лексическое окружение

*/