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

Создайте ф-цию, которая будет строить сообщение с возможностью задавать часть сообщения.
Основные требования:
1. Файл должен содежать ф-цию sendMessage, которая принимает аргументом имя в выводит в
консоль сообщение (Пример работы: sendMessage('Ann') => 'Ann, Just learn it! Your Gromcode')
2. Файл должен содежать ф-цию setMessage, которая принимает аргументом новый текст
сообщения. После установки нового сообщения, ф-ция sendMessage('Ann') должна выводить
уже обновленный текст (Пример работы: setMessage('Good job') => sendMessage('Ann') => 'Ann,
Good job! Your Gromcode')



*/