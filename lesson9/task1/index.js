function getAdults(users) {
    const arrayUsers = Object.entries(users);
    const filtredAdultUsers = arrayUsers.filter(user => user[1] >= 18);
    const adultUsers = filtredAdultUsers.map(user => user[0])
    return adultUsers;
}





/*
Методы работы с объектами
Создайте функцию, которая найдет в объекте всех людей, которым исполнилось 18 лет
Основные требования:
1. Функция с именем getAdults должна принимать объект вида { 'John Doe': 19, 'Tom': 17, 'Bob': 18
}, где ключ - имя человека, значение - его возраст
2. Функция должна вернуть массив всех людей, кто старше 18 лет включительно
3. Для пустого объекта ф-ция должна вернуть пустой массив
4. Пример работы: { 'John Doe': 19, 'Tom': 17, 'Bob': 18 } => ['John Doe', 'Bob']

Упрощенный вариант:
const adultUsers = Object.entries(users).filter(user => user[1] >= 18).map(user => user[0])
     return adultUsers;

*/