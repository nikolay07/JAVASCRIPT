/*Таймер. Написать объект, значение поля которого будет увеличиваться на 5 - каждые 5 сек, и содержать количество пройденых минут*/
export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: 0,
    startTimer() {
        this.timerId = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    getTime() {
        if (`${this.secondsPassed}` < 10) { return `${this.minsPassed}:${"0" + this.secondsPassed}` };
        return (`${this.minsPassed}:${this.secondsPassed}`);
    },
    stopTimer() {
        clearInterval(this.timerId);
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}

/*
Таймер

*/