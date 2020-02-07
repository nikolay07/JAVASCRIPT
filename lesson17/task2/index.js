export const callbackPromt = {
    message: 'Tell me your number',
    showPromt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDefferedPromt(ms) {
        setTimeout(() => this.showPromt(), ms)
    }
};
callbackPromt.showDefferedPromt(1000);