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