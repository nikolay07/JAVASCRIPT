export const callbackPrompt = {
    message: 'Tell me your number',
    showPromt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDefferedPromt(ms) {
        setTimeout(() => this.showPromt(), ms)
    }
};
callbackPrompt.showDefferedPromt(1000);