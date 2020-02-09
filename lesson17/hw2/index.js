export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId = 0,
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
        return (`${this.minsPassed}:${this.secondsPassed.toFixed(2)}`);
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

Опишите объект, значение поля которого будет увеличиваться на 5 каждые 5 секунд, и содержать
ко-во пройденных минут
Основные требования:
1. Экспортируйте из файла объект с именем timer
2. Объект timer содержит поле secondsPassed и поле minsPassed
3. Метод объекта startTimer должен запустить таймер, который увеличивает значение поля
secondsPassed каждые 5 секунд на 5
4. Начальное значение secondsPassed = 0, minsPassed = 0
5. Когда secondsPassed достигает 60, переменная minsPassed должна увеличивать на 1, а
secondsPassed должна обнуляться и цикл начинается сначала
6. Метод getTime должен вернуть текущее состояние таймера в формате '1:05', где 1 -
minsPassed, 45 - secondsPassed. Значение секунд должно быть двузначным (дополнить
лидирующим нулем по необходимости)
7. Метод stopTimer должен остановить таймер и сохранить текущее состояние. Если после
остановки снова выполнить startTimer то нужно продолжить с сохраненной позиции
8. Метод resetTimer должен сбросить таймер в изначальное состояние (до старта)*/