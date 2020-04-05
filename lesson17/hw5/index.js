/*Полное имя. Создать объект, который будет содержать информацию о пользователе и метод(функцию), что возвращает
полное имя пользователя */

export const user = {
    firstName: 'name',
    lastName: 'lastName',
    getFullName() {
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    },
    setFullName(fullName) {
        let separateFullName = fullName.split(' ');
        this.firstName = separateFullName[0];
        this.lastName = separateFullName[1];
    },
}