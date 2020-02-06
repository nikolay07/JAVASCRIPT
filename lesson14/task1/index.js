let message = 'Just learn it';

export function sendMessage(name) {
    const sender = 'Gromcode';
    return console.log(`${name}, ${message}! Your ${sender}`);
}
sendMessage('Ann');

function setMessage(newMassage) {
    return message = newMassage;
}
setMessage('Good job');
sendMessage('Ann');