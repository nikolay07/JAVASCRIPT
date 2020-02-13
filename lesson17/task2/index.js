/*Привязка контекста. Создать объект, который будет запрашивать у пользователя номер телефона для обратного звонка*/
export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        setTimeout(() => this.showPrompt(), ms)
    }
};
callbackPrompt.showDeferredPrompt(1000);