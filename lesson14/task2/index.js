export default function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        let text = `${name}, ${message}! Your ${sender}`;
        console.log(text);
    }

    function setMessage(boldMassage) {
        message = boldMassage.bold();
    }

    function setSender(senderBold) {
        sender = senderBold.bold()
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    }
}


/*

Создайте ф-цию, которая будет создавать независимые счетчики

const masseger1 = createMessenger();
const masseger2 = createMessenger();
const masseger3 = createMessenger();

masseger1.sendMessage('Ann');
masseger2.setMessage('Just learn it');
masseger3.setMessage('Gromcode');

masseger1.sendMessage('Bob');
masseger2.setMessage('Just do it');
masseger3.setMessage('Nike');

masseger1.sendMessage('Tom');
masseger2.setMessage('Just think it');
masseger3.setMessage('Dream');


*/