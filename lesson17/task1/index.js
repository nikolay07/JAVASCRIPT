/*Контекст выполнения функции. Создать объект, который будет содержать информацию о пользователе и метод(функцию), что возвращает полное имя пользователя*/
export const user = {
    firstName: 'name',
    lastName: 'lastName',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`)
    }
};
user.getFullName();