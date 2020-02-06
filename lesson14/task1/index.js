let message = 'Just learn it';

export function sendMessage(name) {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}! Your ${sender}`);
}

function setMessage(newMassage) {
    return message = newMassage;
}
sendMessage('Ann');
setMessage('Good job');
sendMessage('Ann');